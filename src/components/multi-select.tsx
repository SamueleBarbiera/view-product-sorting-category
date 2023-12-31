import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";

interface MultiSelectProps {
    selected: string[];
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
    onChange?: (value: string[]) => void;
    placeholder?: string;
    options: string[];
}

export function MultiSelect({
    selected,
    setSelectedCategories,
    onChange,
    placeholder = "Select options",
    options,
}: MultiSelectProps) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const [query, setQuery] = React.useState("");

    // Register as input field to be used in react-hook-form
    React.useEffect(() => {
        if (onChange) onChange(selected.length ? selected : []);
    }, [onChange, selected]);

    const handleSelect = React.useCallback(
        (option: string) => {
            setSelectedCategories((prev) => [...prev, option]);
        },
        [setSelectedCategories],
    );

    const handleRemove = React.useCallback(
        (option: string) => {
            setSelectedCategories((prev) => prev.filter((item) => item !== option));
        },
        [setSelectedCategories],
    );

    const handleKeyDown = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (!inputRef.current) return;

            if (event.key === "Backspace" || event.key === "Delete") {
                setSelectedCategories((prev) => prev.slice(0, -1));
            }

            // Blur input on escape
            if (event.key === "Escape") {
                inputRef.current.blur();
            }
        },
        [setSelectedCategories],
    );

    // Memoize filtered options to avoid unnecessary re-renders
    const filteredOptions = React.useMemo(() => {
        return options.filter((option) => {
            if (selected.find((item) => item === option)) return false;

            if (query.length === 0) return true;

            return option.toLowerCase().includes(query.toLowerCase());
        });
    }, [options, query, selected]);

    return (
        <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
            <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="flex flex-wrap gap-1">
                    {selected.map((option) => {
                        return (
                            <Badge key={option} variant="secondary" className="rounded hover:bg-secondary">
                                {option}
                                <Button
                                    aria-label="Remove option"
                                    size="sm"
                                    className="ml-2 h-auto bg-transparent p-0 text-primary hover:bg-transparent hover:text-destructive"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleRemove(option);
                                        }
                                    }}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                    onClick={() => handleRemove(option)}
                                >
                                    <X className="h-3 w-3" aria-hidden="true" />
                                </Button>
                            </Badge>
                        );
                    })}
                    <CommandPrimitive.Input
                        ref={inputRef}
                        placeholder={placeholder}
                        className="flex-1 bg-transparent px-1 py-0.5 outline-none placeholder:text-muted-foreground"
                        value={query}
                        onValueChange={setQuery}
                        onBlur={() => setIsOpen(false)}
                        onFocus={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <div className="relative z-50 mt-2">
                {isOpen && filteredOptions.length > 0 ? (
                    <div className="absolute top-0 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                        <CommandGroup className="h-full overflow-auto">
                            {filteredOptions.map((option) => {
                                return (
                                    <CommandItem
                                        key={option}
                                        className="px-2 py-1.5 text-sm"
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                        onSelect={() => {
                                            handleSelect(option);
                                            setQuery("");
                                        }}
                                    >
                                        {option}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    </div>
                ) : null}
            </div>
        </Command>
    );
}
