import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      dispatch(login({ id: "1", name: username, role: "admin" }));
      navigate("a/profile");
    } else {
      alert("Vui lòng nhập tên người dùng và mật khẩu");
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.imageSection}>
        <img
          src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/456964185_3827822390833085_2900098389198244429_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=RHQuMFwCqnEQ7kNvgEPDWfG&_nc_zt=24&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=AvSJ4BLpcv7obgBVPfuHaJS&oh=00_AYBaK_gn0UNrdf75XwZinUUHBDvvyDwD0wCOvAW5WgWu4A&oe=6713EB15"
          alt="Login Illustration"
        />
      </div>
      <div className={styles.formSection}>
        <h1>Welcome to Koi-Thé</h1>
        <div className={styles.formGroup}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className={styles.registerSpace}>
            <p
              onClick={() => {
                navigate(`/register`);
              }}
              className={styles.register}
            >
              Register
            </p>
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
