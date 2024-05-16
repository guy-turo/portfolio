import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import axiosBaseQuery from "../../axios_base_query";
// fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
export const meApi = createApi({
    reducerPath: "me",
    baseQuery: axiosBaseQuery({
        baseUrl: "http://localhost:8000/api/v1",
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({ url: "/me/personal", method: 'get' })
        }),
        addNewProduct: builder.mutation({
            query: (newMe) => ({
                url: "/me",
                method: "post",
                data: newMe,
            })
        })
    })
})

export const { useGetAllProductsQuery, useAddNewProductMutation } = meApi