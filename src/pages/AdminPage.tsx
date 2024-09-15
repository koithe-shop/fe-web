import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const AdminPage: React.FC = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Giả lập quá trình đăng nhập và gán thông tin người dùng
    dispatch(logout());
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Only accessible by users with the "admin" role.</p>
      <button onClick={handleLogout}>Log out as Admin</button>
    </div>
  );
};

export default AdminPage;
