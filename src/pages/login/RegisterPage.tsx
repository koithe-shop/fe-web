import { useState } from "react";
import styles from "./RegisterPage.module.scss";
import { message } from "antd";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      message.error("Password confirmation does not match!");
      return;
    }
    if (fullName && username && phoneNumber && address) {
      // Handle registration logic here (e.g., send data to server)
      message.success("Registration successful!");
      console.log({
        fullName,
        username,
        password,
        phoneNumber,
        address,
      });
    } else {
      message.error("Please fill in all information");
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.imageContainer}>
        <img src="/path/to/your/image.jpg" alt="Register" />
      </div>
      <div className={styles.formContainer}>
        <h1>Register a new account</h1>
        <form onSubmit={handleRegister} className={styles.registerForm}>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
