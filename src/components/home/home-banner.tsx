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
                    <h3>{ product.category.name }</h3>
                    <h2 class="text-white text-4xl lg:text-7xl">{ product.name }</h2>
                    <p class="line-clamp-2 text-justify mb-5 text-gray-200">{ product.description }</p>
                    <button class="button-secondary">
                        Ver producto
                    </button>
                </div>
                <div>
                    <img width="555" height="555" src={`${ imageUrl }/${ product.images[0].url }`} alt={ product.name }/>
                </div>
            </div>
        </header>
    )
});
