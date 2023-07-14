import { component$, useSignal, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import storeDb from '~/api/storeDb';

import { LoadingView, PageBanner } from '~/components';
import { Product } from '~/interfaces';

interface ProductPageState {
    product   : Product;
    isLoading : boolean
}


export default component$(() => {


    const productState = useStore<ProductPageState>({
        isLoading: true,
        product: {} as Product,
    })

    const { params: { slug } } = useLocation();


    useVisibleTask$( async () => {
        const { data: { data } } = await storeDb.get(`/products/${ slug }`)
        console.log(data);
        productState.product = data;
        productState.isLoading = false;
    })

    if( productState.isLoading ){
        return <LoadingView/>
    }

    return(
        <>
            <PageBanner title={ productState.product.name }/>
        
        </>
    )    
});