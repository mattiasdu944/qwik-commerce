import { component$ } from "@builder.io/qwik";

import { Product } from "~/interfaces";
import { ProductCard } from "./product-card";

interface ProductsListProps {
    products: Product[];
}

export const ProductsList = component$<ProductsListProps>(({ products }) => {
    return (
        <div class="products__list">
            {
                products.map(product => 
                    <ProductCard key={ product.id } product={ product }/>
                )
            }
        </div>
    )
});