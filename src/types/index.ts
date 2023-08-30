import { type Icons } from "@/components/icons";
import { AllProducts } from "@/lib/utils";

export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;
}

export interface Option {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
}

export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
    items?: NavItemWithChildren[];
}

export interface FooterItem {
    title: string;
    items: {
        title: string;
        href: string;
        external?: boolean;
    }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface Option {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
}

export interface DataTableSearchableColumn<TData> {
    id: keyof TData;
    title: string;
}

export interface DataTableFilterableColumn<TData> extends DataTableSearchableColumn<TData> {
    options: Option[];
}

export interface StoredFile {
    id: string;
    name: string;
    url: string;
}

export type Product = typeof AllProducts.collection_listings[number];
