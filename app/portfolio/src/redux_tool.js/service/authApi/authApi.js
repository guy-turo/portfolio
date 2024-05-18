import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api/v1",
    }),
    endpoints: (builder) => ({
        //login
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/auth/login",
                method: 'post',
                body: {
                    email: email,
                    password: password,
                }
            })
        }),
        signUp: builder.mutation({
            query: ({ name, email, password }) => ({
                url: '/auth/signup',
                method: 'post',
                body: {
                    name: name,
                    email: email,
                    password: password,
                }
            })
        }),
        logout: builder.mutation({
            query: ({ token }) => ({
                url: '/auth/logout',
                method: 'put',
                body: { token: token }
            })
        })
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useSignUpMutation
} = authApi