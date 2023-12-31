import { FooterItem, MainNavItem } from "@/types";
export type SiteConfig = typeof siteConfig;

const links = {
    twitter: "https://twitter.com/example",
    github: "https://github.com/test",
};

export const siteConfig = {
    name: "FakeCommerce",
    description: "An open source e-commerce - build with everything new in Next.js 13.",
    url: "https://test.example.com",
    ogImage: "https://test.example.com/opengraph-image.png",
    mainNav: [
        {
            title: "Home",
            items: [
                {
                    title: "Products",
                    href: "/products",
                    description: "All the products we have to offer.",
                },
            ],
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: "Help",
            items: [
                {
                    title: "About",
                    href: "/about",
                    external: false,
                },
                {
                    title: "Contact",
                    href: "/contact",
                    external: false,
                },
                {
                    title: "Terms",
                    href: "/terms",
                    external: false,
                },
                {
                    title: "Privacy",
                    href: "/privacy",
                    external: false,
                },
            ],
        },
        {
            title: "Social",
            items: [
                {
                    title: "Twitter",
                    href: links.twitter,
                    external: true,
                },
                {
                    title: "GitHub",
                    href: links.github,
                    external: true,
                },
            ],
        },
    ] satisfies FooterItem[],
};
