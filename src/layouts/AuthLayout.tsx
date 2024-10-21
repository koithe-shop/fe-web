import { ConfigProvider, Layout, Menu } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  TagsOutlined,
  TagOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
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
      onClick: () => navigate("/a/profile"),
    },
    {
      key: "order",
      icon: <ShoppingCartOutlined />,
      label: "Order",
      onClick: () => navigate("/a/order"),
    },
    {
      key: "product",
      icon: <TagsOutlined />, // Changed icon
      label: "Product",
      onClick: () => navigate("/a/product"),
    },
    {
      key: "couponManage",
      icon: <TagOutlined />, // Changed icon
      label: "Coupon Manage",
      onClick: () => navigate("/a/coupon-manage"),
    },

    {
      key: "User Manage",
      icon: <UsergroupAddOutlined />, // Changed icon
      label: "User Manage",
      onClick: () => navigate("/a/user-manage"),
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
