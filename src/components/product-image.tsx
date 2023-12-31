import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface ProductImageProps extends React.HTMLAttributes<HTMLDivElement> {
    image: string;
}

export function ProductImage({ image, className, ...props }: ProductImageProps) {
    if (!image) {
        return (
            <div
                aria-label="Product Placeholder"
                role="img"
                aria-roledescription="placeholder"
                className="flex aspect-square h-full w-full flex-1 items-center justify-center bg-secondary"
            >
                <Icons.placeholder className="h-9 w-9 text-muted-foreground" aria-hidden="true" />
            </div>
        );
    }

    return (
        <div aria-label="Product image" className={cn("flex flex-col gap-2", className)} {...props}>
            <div className="overflow-hidden">
                <div
                    className="-ml-4 flex touch-pan-y"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <div className="  flex-full pl-4">
                        <Image
                            src={image}
                            alt={image}
                            width="500"
                            height="500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="rounded-sm w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
