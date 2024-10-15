import React from "react";
import { Avatar, Badge, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import logoKoi from "../../assets/images/koi-the.webp";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.mainLayout}>
      <Flex
        className={styles.navSpace}
        justify="space-between"
        align="center"
        style={{ padding: "0 20px", background: "#2b302e" }}
      >
        <img
          src={logoKoi}
          alt="Logo"
          height={"100%"}
          style={{ borderRadius: 100 }}
        />
        <Flex align="center">
          <div
            className={styles.navCursor}
            onClick={() => handleNavigation("/")}
          >
            Home
          </div>
          {/* <div
            className={styles.navCursor}
            onClick={() => handleNavigation("/about")}
          >
            Koi Fish
          </div> */}
          <div
            className={styles.navCursor}
            onClick={() => handleNavigation("/products")}
          >
            Product
          </div>

          <div
            className={styles.cursor}
            onClick={() => handleNavigation("/login")}
          >
            Login
          </div>
          <div
            className={styles.cursor}
            onClick={() => handleNavigation("/login")}
          >
            <Avatar
              style={{ backgroundColor: "#333", verticalAlign: "middle" }}
              size="large"
              gap={10}
              icon={<UserOutlined />}
            />
          </div>
          <div className={styles.cursor} onClick={() => handleNavigation("/")}>
            <Badge count="2">
              <ShoppingCartOutlined style={{ fontSize: 26, color: "#fff" }} />
            </Badge>
          </div>
        </Flex>
      </Flex>
      <div style={{ color: "#000", backgroundColor: "#ffffff" }}>
        {children}
      </div>
      <footer className={styles.footer}>Main Footer</footer>
    </div>
  );
};

export default MainLayout;
