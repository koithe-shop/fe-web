import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../types/type";

// Tạo slice API với RTK Query
export const userSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
    login: builder.mutation<{ message: string, token: string }, { username: string, password: string }>({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

// Export các hook để sử dụng trong các component
export const { useGetUsersQuery, useLoginMutation } = userSlice;
