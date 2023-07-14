import { component$ } from '@builder.io/qwik';
import { DocumentHead, routeLoader$ } from '@builder.io/qwik-city';

import storeDb from '~/api/storeDb';
import { Product } from '~/interfaces';
import { PageBanner, ProductsList, SearchInput } from '~/components';



export const useProductsList = routeLoader$<Product[]>(async () => {
    const { data: { data } } = await storeDb.get('/products')
    return data;
});

export default component$(() => {

    const products = useProductsList();

    return (
        <>
            <PageBanner 
                title='Productos' 
                description='Descubre nuestros productos de calidad al mejor precio'
            />
            <section class="section">
                <div class="grid items-center mb-5 grid-cols-1 md:grid-cols-2">
                    <h2>Todos los productos</h2>
                    <SearchInput placeholder='Buscar productos'/>
                </div>
                <ProductsList products={ products.value }/>
            </section>

        </>
    )
});

export const head: DocumentHead = {
    title: "Productos - QwikCommerce",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
  