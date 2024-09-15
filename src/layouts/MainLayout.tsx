import React from "react";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  // Hàm để điều hướng đến các trang khác
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="main-layout">
      <Flex
        className="nav-space"
        // justify="space-between"
        style={{ borderBottom: "1px solid #ddd" }}
      >
        <div className="nav-cursor" onClick={() => handleNavigation("/")}>
          Home
        </div>
        <div className="nav-cursor" onClick={() => handleNavigation("/about")}>
          About
        </div>
        <div className="nav-cursor" onClick={() => handleNavigation("/login")}>
          Login
        </div>
      </Flex>
      <div style={{ padding: "1rem" }}>{children}</div>
      <footer
        style={{
          padding: "1rem",
          borderTop: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        Main Footer
      </footer>
    </div>
  );
};

export default MainLayout;
