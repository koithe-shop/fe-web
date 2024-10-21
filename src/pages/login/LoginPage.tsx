import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import logoKoi from "../../assets/images/koi-the.webp";
import { useLoginMutation } from "../../store/user/userSlice";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, data }] = useLoginMutation();

  const handleLogin = async () => {
    if (username && password) {
      try {
        const result = await login({ username, password }).unwrap(); // unwrap() để lấy trực tiếp kết quả trả về
        console.log(result);

        // Kiểm tra kết quả trả về từ API
        // if (result.message === "Login successful") {
        //   navigate("/dashboard"); // Điều hướng tới trang dashboard
        // } else {
        //   alert("Sai tên người dùng hoặc mật khẩu");
        // }
      } catch (error) {
        console.error("Login error:", error);
        // alert("Đăng nhập thất bại, vui lòng thử lại.");
      }
    } else {
      // alert("Vui lòng nhập tên người dùng và mật khẩu");
    }
  };


  return (
    <div className={styles.loginWrapper}>
      <div className={styles.imageSection}>
        <img
          src={logoKoi}
          alt="Login Illustration"
        />
      </div>
      <div className={styles.formSection}>
        <div>
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
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
