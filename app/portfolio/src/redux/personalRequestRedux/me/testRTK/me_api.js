import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react'

import axiosBaseQuery from '../../../../redux_tool.js/axios_base_query';

export const fetchMe = createAsyncThunk("me", async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const me = await response.data
    return me
});

// export const meSlice = createSlice({
//     name: "me",
//     initialState: {
//         loading: false,
//         data: [],
//         error: null,
//     },
//     reducers: {
//         // addMe(state, action) {
//         //     state.data.push(action.payload)
//         // },
//         // updateMe(state, action) {
//         //     const { _id, images, fullName, title, description, email, phoneNumber, experienceYear, clients, projects } = action.payload
//         //     const existingMe = state.data.find((me) => me._id === _id)
//         //     if (existingMe) {
//         //         existingMe.images = images;
//         //         existingMe.fullName = fullName;
//         //         existingMe.title = title;
//         //         existingMe.description = description;
//         //         existingMe.email = email;
//         //         existingMe.phoneNumber = phoneNumber;
//         //         existingMe.experienceYear = experienceYear;
//         //         existingMe.clients = clients;
//         //         existingMe.projects = projects;
//         //     }
//         // },
//         // deleteMe(state, action) {
//         //     const { _id } = action.payload
//         //     const existingMe = state.data.find((me) => me._id === _id)
//         //     if (existingMe) {
//         //         state.data = state.data.filter((me) => me._id !== _id)
//         //     }
//         // }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchMe.pending, (state, action) => {
//                 state.loading = true
//             })
//             .addCase(fetchMe.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.data = [...state.data, ...action.payload]
//             })
//             .addCase(fetchMe.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload
//             })
//     }
// })

export const meApi = createApi({
    reducerPath: "meApi",
    axiosBaseQuery,
    endpoints: (builder) => {
        fetchMe: builder.query({
            query: () => "/me/personal",
        });
        createMe: builder.mutation({
            query: (newData) => ({
                url: "/me",
                method: "POST",
                data: newData,
            }),
        });
        updateMe: builder.mutation({
            query: (updateData) => ({
                url: `/me/${updateData.id}`,
                method: "PUT",
                data: updateData,
            }),
        });
        deleteMe: builder.mutation({
            query: (id) => ({
                url: `/me/${id}`,
                method: "DELETE"
            }),
        })
    }
})
export const {} = meApi
export default meApi.reducer;