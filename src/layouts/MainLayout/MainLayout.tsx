import React from "react";
import { Avatar, Badge, Flex, Typography, Space } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import logoKoi from "../../assets/images/koi-the.webp";
import {
  ShoppingCartOutlined,
  UserOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <Flex
          justify="space-between"
          align="center"
          className={styles.headerContent}
        >
          <img
            onClick={() => handleNavigation("/")}
            src={logoKoi}
            alt="Logo"
            className={styles.logo}
          />
          <nav className={styles.nav}>
            <div
              className={styles.navItem}
              onClick={() => handleNavigation("/")}
            >
              Home
            </div>
            <div
              className={styles.navItem}
              onClick={() => handleNavigation("/products")}
            >
              Products
            </div>
            <div
              className={styles.navItem}
              onClick={() => handleNavigation("/login")}
            >
              Login
            </div>
            <div
              className={styles.navItem}
              onClick={() => handleNavigation("a/profile")}
            >
              <Avatar
                style={{ backgroundColor: "#48757e", verticalAlign: "middle" }}
                size="large"
                icon={<UserOutlined />}
              />
            </div>
            <div
              className={styles.navItem}
              onClick={() => handleNavigation("/")}
            >
              <Badge count={2} color="#48757e">
                <ShoppingCartOutlined className={styles.cartIcon} />
              </Badge>
            </div>
          </nav>
        </Flex>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <img src={logoKoi} alt="Logo" className={styles.footerLogo} />
            <Title level={4}>Koi Fish Store</Title>
            <ul className={styles.footerContactList}>
              <li>123 Koi Street, Fishville, FK 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@koifishstore.com</li>
            </ul>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerSection}>
              <Title level={4}>Quick Links</Title>
              <Space direction="vertical">
                <Text
                  className={styles.footerLink}
                  onClick={() => handleNavigation("/")}
                >
                  Home
                </Text>
                <Text
                  className={styles.footerLink}
                  onClick={() => handleNavigation("/products")}
                >
                  Products
                </Text>
                <Text
                  className={styles.footerLink}
                  onClick={() => handleNavigation("/")}
                >
                  About Us
                </Text>
                <Text
                  className={styles.footerLink}
                  onClick={() => handleNavigation("/")}
                >
                  Contact
                </Text>
              </Space>
            </div>
            <div className={styles.footerSection}>
              <Title level={4}>Follow Us</Title>
              <Space size="large" className={styles.socialIcons}>
                <FacebookOutlined />
                <InstagramOutlined />
                <TwitterOutlined />
              </Space>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <Text>&copy; 2024 Koi Fish Store. All rights reserved.</Text>
        </div>
      </footer>
    </div>
  );
}
