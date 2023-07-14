import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './styles.css?inline'

export const LoadingView = component$(() => {
   useStylesScoped$(styles)
    return (
      <div class="loading-view">
         <div class="spinner">
            <div></div>   
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
         </div>
      </div>
    )
});