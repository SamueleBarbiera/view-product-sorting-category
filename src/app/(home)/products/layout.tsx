import { env } from "@/env.mjs";
import { Metadata } from "next";

interface ProductsLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: "Products page",
    description: "All available products",
};

export default function ProductsLayout({ children }: ProductsLayoutProps) {
    return <>{children}</>;
}
