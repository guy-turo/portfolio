import { configureStore } from "@reduxjs/toolkit";
import { meApi } from "./me/meService";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
    reducer: {
        [meApi.reducerPath]: meApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(meApi.middleware)
})

setupListeners(store.dispatch)