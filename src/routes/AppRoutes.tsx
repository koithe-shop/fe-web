// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import AboutPage from "../pages/AboutPage";
// import AdminPage from "../pages/AdminPage";
// import NotFoundPage from "../pages/NotFoundPage";
// import LoginPage from "../pages/LoginPage";
// import UnauthorizedPage from "../pages/UnauthorizedPage";
// import PrivateRoute from "../components/PrivateRoute";

// const AppRoutes: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/about" element={<AboutPage />} />

//       {/* Route yêu cầu người dùng phải đăng nhập */}
//       <Route element={<PrivateRoute />}>
//         <Route path="/admin" element={<AdminPage />} />
//       </Route>

//       {/* Route yêu cầu quyền admin */}
//       <Route element={<PrivateRoute requiredRole="admin" />}>
//         <Route path="/admin" element={<AdminPage />} />
//       </Route>

//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/unauthorized" element={<UnauthorizedPage />} />
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import PrivateRoute from "../components/PrivateRoute";

// Import các layout
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Các trang sử dụng MainLayout */}
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <AboutPage />
          </MainLayout>
        }
      />

      <Route element={<PrivateRoute requiredRole="admin" />}>
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminPage />
            </AdminLayout>
          }
        />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
