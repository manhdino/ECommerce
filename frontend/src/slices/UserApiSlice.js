import { apiSlice } from "./ApiSlice";

const USERS_URL = "/user";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/sign-in`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({}),
    }),
  }),
});

export const { useLoginMutation } = userApiSlice;
