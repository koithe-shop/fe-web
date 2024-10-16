import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import NotFoundPage from "../pages/specialPage/NotFoundPage";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/login/RegisterPage";
import UnauthorizedPage from "../pages/specialPage/UnauthorizedPage";
import ProfilePage from "../pages/authPage/profile/ProfilePage";
import ProductAuth from "../pages/authPage/product/Product";
import OrderAuth from "../pages/authPage/order/Order";

// Import layouts
import MainLayout from "../layouts/MainLayout/MainLayout";
import Product from "../pages/product/Product";
import AuthLayout from "../layouts/AuthLayout";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes with MainLayout */}
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/products"
        element={
          <MainLayout>
            <Product />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <LoginPage />
          </MainLayout>
        }
      />
      <Route
        path="/register"
        element={
          <MainLayout>
            <RegisterPage />
          </MainLayout>
        }
      />
      <Route
        path="/a/profile"
        element={
          <MainLayout>
            <AuthLayout>
              <ProfilePage />
            </AuthLayout>
          </MainLayout>
        }
      />
      <Route
        path="/a/product"
        element={
          <MainLayout>
            <AuthLayout>
              <ProductAuth />
            </AuthLayout>
          </MainLayout>
        }
      />
      <Route
        path="/a/order"
        element={
          <MainLayout>
            <AuthLayout>
              <OrderAuth />
            </AuthLayout>
          </MainLayout>
        }
      />
      {/* Other Routes */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
