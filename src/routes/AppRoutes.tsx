import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import AdminPage from "../pages/AdminPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/login/LoginPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";

// Import các layout
import MainLayout from "../layouts/MainLayout/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Product from "../pages/product/Product";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Các trang sử dụng MainLayout */}
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage children={undefined} />
          </MainLayout>
        }
      />
      <Route
        path="/products"
        element={
          <MainLayout>
            <Product children={undefined} />
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

      <Route>
        {/* <Route element={<PrivateRoute requiredRole="admin" />}> */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminPage />
            </AdminLayout>
          }
        />
      </Route>
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
