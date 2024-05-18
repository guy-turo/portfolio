import { configureStore } from "@reduxjs/toolkit";
import { apiData } from "./dataApi/apiDataService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./authApi/authApi";
export const store = configureStore({
    reducer: {
        [apiData.reducerPath]: apiData.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiData.middleware, authApi.middleware)
})

setupListeners(store.dispatch)