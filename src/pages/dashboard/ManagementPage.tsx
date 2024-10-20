import React, { useState } from "react";
import { Menu } from "antd";
import OrderManagement from "./OrderManagement";
import Dashboard from "./Dashboard";
import ProductManagement from "./ProductManagement";

const ManagementPage: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <OrderManagement />;
      case "2":
        return <Dashboard />;
      case "3":
        return <ProductManagement />;
      default:
        return <OrderManagement />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Menu style={{ width: 200 }} selectedKeys={[selectedKey]} onClick={handleMenuClick} mode="inline">
        <Menu.Item key="1">Quản lý đơn hàng</Menu.Item>
        <Menu.Item key="2">Dashboard</Menu.Item>
        <Menu.Item key="3">Quản lý sản phẩm</Menu.Item>
      </Menu>
      <div style={{ flex: 1, padding: "20px" }}>{renderContent()}</div>
    </div>
  );
};

export default ManagementPage;
