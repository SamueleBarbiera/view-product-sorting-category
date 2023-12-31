"use client";

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Products } from "@/components/products";
import { Container } from "@/components/containers/mainContainer";
import { useCollectionListingFetch } from "@/services/products/collection.listing.query";

export default function ProductsPage() {
    const { data: categoriesData } = useCollectionListingFetch().useGetAllCategories();

    return (
        <Container>
            <PageHeader id="products-page-header" aria-labelledby="products-page-header-heading">
                <PageHeaderHeading size="sm">Products</PageHeaderHeading>
                <PageHeaderDescription size="sm">Buy products from our site</PageHeaderDescription>
            </PageHeader>
            <Products
                id="products-page-products"
                aria-labelledby="products-page-products-heading"
                categories={categoriesData ?? []}
            />
        </Container>
    );
}
