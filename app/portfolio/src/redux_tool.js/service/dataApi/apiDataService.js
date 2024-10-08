import { createApi } from "@reduxjs/toolkit/query/react";

import axiosBaseQuery from "../../axios_base_query";
export const apiData = createApi({
    reducerPath: "dataApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "http://localhost:8000/api/v1",
    }),
    endpoints: (builder) => ({
        sendEmail: builder.mutation({
            query: ({ data }) => ({
                url: "/me/sendEmail",
                method: 'post',
                data: data
            })
        }),
        //
        getMe: builder.query({
            query: () => ({ url: "/me/personal", method: 'get' })
        }),
        addMe: builder.mutation({
            query: ({ data }) => ({
                url: "/me/personal",
                method: "post",
                data: data
            })
        }),
        updateMe: builder.mutation({
            query: ({ id, data }) => {
                console.log("data", data)
                return {
                    url: `/me/personal/${id}`,
                    method: 'put',
                    headers: { 'Content-Type': 'multipart/form-data' },
                    data: data,
                }
            }
        }),
        //experience
        getExperience: builder.query({
            query: () => ({ url: "/me/experiences", method: "get" })
        }),
        addExperience: builder.mutation({
            query: ({ frontend, backend, other }) => ({
                url: "/me/experiences",
                method: "post",
                data: {
                    frontend: frontend,
                    backend: backend,
                    other: other,
                }
            })
        }),
        updateExperience: builder.mutation({
            query: ({ text, el, id }) => ({
                url: `/me/experiences/${id}`,
                method: "put",
                data: {
                    text: text,
                    el: el
                }
            })
        }),
        //Project
        getProject: builder.query({
            query: () => ({ url: "/me/projects", method: 'get' })
        }),
        addProject: builder.mutation({
            query: ({ data }) => ({
                url: "/me/projects",
                method: "post",
                headers: { 'Content-Type': 'multipart/form-data' },
                data: data
            })
        }),
        deleteProject: builder.mutation({
            query: ({ id }) => ({
                url: `/me/projects/${id}`,
                method: 'delete',
            })
        }),
        updateProject: builder.mutation({
            query: ({ data, id }) => ({

                url: `/me/projects/${id}`,
                method: 'put',
                headers: { 'Content-Type': 'multipart/form-data' },
                data: data
            })
        }),
        //services
        getServices: builder.query({
            query: () => ({ url: '/me/services', method: 'get' })
        }),
        addService: builder.mutation({
            query: ({ userExp, frontend, backend, other }) => ({
                url: "/me/services",
                method: "post",
                data: {
                    userExp: userExp,
                    frontend: frontend,
                    backend: backend,
                    other: other
                }
            })
        }),
        updateService: builder.mutation({
            query: ({ id, text, el }) => ({
                url: `/me/services/${id}`,
                method: "put",
                data: {
                    text: text,
                    el: el,
                }
            })
        }),
        //social
        getSocial: builder.query({
            query: () => ({ url: '/me/socials', method: 'get' })
        }),
        addSocial: builder.mutation({
            query: ({ title, link }) => ({
                url: '/me/socials',
                method: 'post',
                data: {
                    title: title,
                    link: link
                }
            })
        }),
        deleteSocial: builder.mutation({
            query: ({ id }) => ({
                url: `/me/socials/${id}`,
                method: 'delete',
            })
        }),
        updateSocial: builder.mutation({
            query: ({ id, title, link }) => ({
                url: `/me/socials/${id}`,
                method: 'put',
                data: {
                    title: title,
                    link: link
                }
            })
        }),
        //testimonial
        getTestimonial: builder.query({
            query: () => ({ url: '/me/testimonials', method: 'get' })
        }),
        addTestimonials: builder.mutation({
            query: ({ data }) => ({
                url: '/me/testimonials',
                method: 'post',
                headers: { 'Content-Type': 'multipart/form-data' },
                data: data
            })
        }),
        deleteTestimonials: builder.mutation({
            query: ({ id }) => ({
                url: `/me/testimonials/${id}`,
                method: 'delete',
            })
        }),
        updateTestimonials: builder.mutation({
            query: ({ id, data }) => ({
                url: `/me/testimonials/${id}`,
                method: "put",
                headers: { 'Content-Type': 'multipart/form-data' },
                data: data,
            })
        }),
        //pdf
        getPdf: builder.query({
            query: () => ({ url: '/pdf', method: 'get' })
        }),
        addPdf: builder.mutation({
            query: ({ data }) => {
                console.log("data", data)
                console.log(data.get('file'))
                return {
                    url: '/pdf/upload',
                    method: 'post',
                    headers: { 'Content-Type': 'multipart/form-data' },
                    data: data
                }
            }
        }),
        deletePdf: builder.mutation({
            query: ({ id }) => {
                console.log(id)
                return {
                    url: `/pdf/${id}`,
                    method: 'delete'
                }

            }
        }),
        updatePdf: builder.mutation({
            query: ({ id, data }) => ({
                url: `/pdf/${id}`,
                method: 'put',
                headers: { 'Content-Type': 'multipart/form-data' },
                data: data,
            })
        }),
        downloadPdf: builder.mutation({
            query: (id) => {
                console.log('checking', id)
                return {
                    url: `/pdf/${id}/download-pdf`,
                    method: 'post',
                    data: id,
                }
            }
        })

    })
})

export const {
    useAddExperienceMutation,
    useAddMeMutation,
    useAddPdfMutation,
    useAddProjectMutation,
    useAddServiceMutation,
    useAddSocialMutation,
    useAddTestimonialsMutation,
    useDeletePdfMutation,
    useDeleteProjectMutation,
    useDeleteSocialMutation,
    useDeleteTestimonialsMutation,
    useGetExperienceQuery,
    useGetMeQuery,
    useGetPdfQuery,
    useGetProjectQuery,
    useGetServicesQuery,
    useGetSocialQuery,
    useGetTestimonialQuery,
    useUpdateExperienceMutation,
    useUpdateMeMutation,
    useUpdatePdfMutation,
    useUpdateProjectMutation,
    useUpdateServiceMutation,
    useUpdateSocialMutation,
    useUpdateTestimonialsMutation,
    useSendEmailMutation,
    useDownloadPdfMutation,
} = apiData