import { ApiCreatePostResponse, ApiDeletePostResponse, Post } from "@/types";
import { baseApi } from "./base-api";

const postsUrl = "posts";

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({ url: postsUrl }),
      transformResponse: (response: Post[]) => response,
      providesTags: ["Posts"],
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => ({ url: `${postsUrl}/${id}` }),
      providesTags: ["Posts"],
    }),
    getPostsByAuthor: builder.query<Post[], number | string>({
      query: (id) => ({
        url: `${postsUrl}/by-author`,
        method: "POST",
        body: {
          id,
        },
      }),
      providesTags: ["Posts"],
    }),
    createPost: builder.mutation<ApiCreatePostResponse, Post>({
      query: (body) => ({
        url: postsUrl,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation<ApiDeletePostResponse, Post>({
      query: ({ id, ...body }) => ({
        url: `${postsUrl}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation<ApiDeletePostResponse, number | string>({
      query: (id) => ({
        url: `${postsUrl}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostsByAuthorQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
