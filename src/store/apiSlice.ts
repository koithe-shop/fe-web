import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  id: string;
  name: string;
  // Thêm các thuộc tính khác của người dùng nếu cần
}

// Tạo slice API với RTK Query
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
  }),
});

// Export các hook để sử dụng trong các component
export const { useGetUsersQuery } = apiSlice;
