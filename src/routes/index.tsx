import { component$ } from '@builder.io/qwik';
import { DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import storeDb from '~/api/storeDb';
import { HomeBanner } from '~/components';
import { Product } from '~/interfaces';
import { MostPopularSection } from '../components/home/most-popular-section';


export const useProductsList = routeLoader$<Product[]>(async () => {
    const { data: { data } } = await storeDb.get('/products')
    return data;
});

export default component$(() => {

    const products = useProductsList();

    return (
        <>
            <HomeBanner product={ products.value[1] }/>
            <MostPopularSection products={ products.value.slice(0,3) }/>
            <section class="min-h-screen">

            </section>
        </>
    )
});

export const head: DocumentHead = {
    title: "QwikCommerce",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
  };
  