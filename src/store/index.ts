import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { userSlice } from "./user/userSlice";
import { couponSlice } from "./coupon/couponSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, // Thêm auth reducer
    [userSlice.reducerPath]: userSlice.reducer,
    [couponSlice.reducerPath]: couponSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userSlice.middleware, couponSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
