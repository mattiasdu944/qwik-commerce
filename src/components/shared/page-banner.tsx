import { component$ } from "@builder.io/qwik";

export interface PageBannerProps {
  title        : string;
  description? : string;
}

export const PageBanner = component$<PageBannerProps>(({ title, description='' }) => {

    return (
        <header class="banner">    
            <div class="container">
                <h1 class="text-white text-4xl lg:text-6xl">{ title }</h1>
                <p class="line-clamp-2 text-white text-justify mb-5">{ description }</p>
            </div>
        </header>
    );
});