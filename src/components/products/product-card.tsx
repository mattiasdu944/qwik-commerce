import { component$ } from "@builder.io/qwik";

import { Product } from "~/interfaces";

export interface ProductCardProps {
  product: Product;
}

export const ProductCard = component$<ProductCardProps>(({ product }) => {
    const imageUrl = 'https://store.innovacode.online';

    return (
        <div class="product__card">
            <img width={858} height={858} src={`${ imageUrl + product.images[0].url }`} alt="" />
            <h4 class="line-clamp-1">{ product.name }</h4>
            <p>Precio: { product.price }$</p>
        </div>
    );
});