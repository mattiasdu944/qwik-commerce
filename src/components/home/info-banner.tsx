import { component$ } from "@builder.io/qwik";
import { infoServices } from "~/constants";

export const InfoBanner = component$(() => {
    return(
        <div class="bg-slate-100 py-10">
            <div class='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    infoServices.map(info => 
                        <div class="text-center">
                            <div class='text-4xl mx-auto max-w-min mb-3 rounded-full p-4 bg-indigo-100 text-indigo-600'>
                                { info.icon }
                            </div>
                            <h3>
                                { info.title }
                            </h3>
                            <p>{ info.description }</p>
                        </div>    
                    )
                }
            </div>
        </div>
    )
});