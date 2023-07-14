import { component$, useSignal, $ } from '@builder.io/qwik';

import { LuSearch } from "@qwikest/icons/lucide";

export interface SearchInputProps { 
    placeholder: string;
}

export const SearchInput = component$<SearchInputProps>(({ placeholder }) => {
    const isFocus = useSignal( false );


    const handleFocus = $(() => {
        isFocus.value = !isFocus.value
    })

    return (
        <div class={`search-input transition-all ${ isFocus.value ?  'border-indigo-600 border-2' : '' }`}>
            <input 
                type="text"
                onFocus$={ handleFocus }
                onBlur$={ handleFocus }
                placeholder={ placeholder }
            />
            <div class="text-xl cursor-pointer active:scale-95 transition-all">
                <LuSearch/>
            </div>
        </div>
    );
});