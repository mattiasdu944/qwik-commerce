import { component$ } from "@builder.io/qwik";
import { Product } from "~/interfaces";

export interface ProductBannerProps {
    product: Product;
}

export const ProductBanner = component$<ProductBannerProps>(({ product }) => {
    const imageUrl = 'https://store.innovacode.online';

    return (
        <div class="banner">
            <div class="container flex items-center gap-10">

                <div class="text-white w-full md:w-7/12">
                    <h1 class="mb-5">{ product.name }</h1>
                    <h3>Descripcion:</h3>
                    <p class="mb-5 text-justify">{ product.description }</p>

                    <h3>Precio:</h3>
                    <p class="mb-5">{ product.price }$</p>
                    <button class='button-secondary'>Comprar producto</button>
                </div>
                <div class='w-full md:w-5/12'>
                    <img width='500' height='500' src={`${ imageUrl + product.images[0].url }`} alt={ product.name } />
                    <div class='flex items-center justify-center gap-3'>
                        {
                            product.images.map((image) => 
                            <div key={ image.id } class='border border-gray-300 p-3 rounded-lg cursor-pointer'>
                                <img width='75' height='75' src={`${ imageUrl + image.url }`} alt={ product.name } />
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
});