import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    // Giả lập quá trình đăng nhập và gán thông tin người dùng
    dispatch(login({ id: "1", name: "John Doe", role: "admin" }));
    navigate("/admin");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log in as Admin</button>
    </div>
  );
};

export default LoginPage;
