import { ConfigProvider, Layout, Menu } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { useNavigate } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
      onClick: () => navigate("/a/profile"), // Navigate to Profile page
    },
    {
      key: "order",
      icon: <ShoppingCartOutlined />,
      label: "Order",
      onClick: () => navigate("/a/order"), // Navigate to Order page
    },
    {
      key: "product",
      icon: <AppstoreOutlined />,
      label: "Product",
      onClick: () => navigate("/a/product"), // Navigate to Product page
    },
  ];

  return (
    <Layout style={{ padding: "0px 0px", minHeight: "100vh" }}>
      <Sider width={300}>
        <ConfigProvider
          theme={{
            token: {
              colorText: "#efe9cf",
              fontSize: 18,
            },
            components: {
              Menu: {
                itemSelectedBg: "#fff",
                iconMarginInlineEnd: 20,
                itemSelectedColor: "#333",
              },
            },
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["profile"]}
            style={{
              height: "100%",
              backgroundColor: "#4d5652",
              fontWeight: "500",
            }}
            items={menuItems}
          />
        </ConfigProvider>
      </Sider>
      <Layout style={{ padding: "0 24px" }}>
        <Content style={{ padding: "0 10px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
