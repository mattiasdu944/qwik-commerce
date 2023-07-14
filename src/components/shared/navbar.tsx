import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { IoGridOutline } from "@qwikest/icons/ionicons";



export const Navbar = component$(() => {
    const isScroll = useSignal(false);
    useOnWindow( 'scroll', $(() => {
        if( window.scrollY > 150 ){
            isScroll.value = true;
            return
        }
        isScroll.value = false;
    }));
    return(
        <nav class={`navbar ${ isScroll.value && 'backdrop-blur-md bg-white/30 transition-all' }`}>
            <div class={`navbar__container`}>
                <h1 class={`font-medium text-2xl ${ !isScroll.value && 'text-white' }`}>QwikStore</h1>
                <ul class="flex gap-5">
                    <li>
                        <Link href="/" class={`font-medium ${ !isScroll.value && 'text-white' }`}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" class={`font-medium ${ !isScroll.value && 'text-white' }`}>
                            Productos
                        </Link>
                    </li>
                </ul>
                <div class="navbar__menu--btn">
                    <IoGridOutline/>
                </div>
            </div>
        </nav>
    ) 
});