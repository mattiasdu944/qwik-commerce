import { createContextId } from "@builder.io/qwik";

export interface UiContextState {
    scrollY : number;
}

export const UiContext = createContextId<UiContextState>('ui.context');