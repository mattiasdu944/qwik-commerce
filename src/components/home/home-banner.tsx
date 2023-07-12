import { component$ } from "@builder.io/qwik";
import { Product } from "~/interfaces";

export interface HomeBannerProps {
  product: Product;
}

export const HomeBanner = component$<HomeBannerProps>(({ product }) => {
    const imageUrl = 'https://store.innovacode.online';
    return (
        <header class="home__banner">
            <div class="container grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                    <h2 class="text-white text-3xl lg:text-6xl">{ product.name }</h2>
                    <h3 class="mb-5">{ product.category.name }</h3>
                    <p class="line-clamp-3 mb-5">{ product.description }</p>
                    <button class="button-secondary">
                        Ver producto
                    </button>
                </div>
                <div>
                    <img width="555" height="555" style={{ width:'100%' }} src={`${ imageUrl }/${ product.images[0].url }`} alt={ product.name }/>
                </div>
            </div>
        </header>
    )
});
