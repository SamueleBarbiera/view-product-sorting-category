import Providers from "@/lib/provider";
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { env } from "@/env.mjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: { default: "FakeCommerce", template: "%s | FakeCommerce" },
    description: "An open source e-commerce FakeCommerce build with everything new in Next.js 13",
    openGraph: {
        title: "FakeCommerce",
        description: "An open source e-commerce FakeCommerce build with everything new in Next.js 13",
        url: new URL(env.NEXT_PUBLIC_APP_URL),
        siteName: "FakeCommerce",
        images: [
            {
                url: "https://cdn.shopify.com/s/files/1/0569/3315/4889/products/dark-wall-bedside-table_925x_1e444a82-4f58-4f20-af70-052b4d8e171a.jpg?v=1650463482",
                width: 800,
                height: 600,
            },
        ],
        locale: "en-US",
        type: "website",
    },
};

interface ILayout {
    children: ReactNode;
}

export default function RootLayout({ children }: ILayout) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
