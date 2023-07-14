import { component$ } from "@builder.io/qwik";
import { Product } from "~/interfaces";
import { ProductsList } from '../products/products-list';

export interface MostPopularSectionProps {
  products: Product[];
}

export const MostPopularSection = component$<MostPopularSectionProps>(({ products }) => {
  
    return (
        <section class="section">
            <h2 class="mb-5">Productos populares</h2>
            <ProductsList products={ products }/>
        </section>
    );
});