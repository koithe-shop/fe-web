// src/components/UserTable.tsx
import React from "react";
import { Table, Button, Dropdown, Menu } from "antd";
import { User } from "../../../types/type";
import { DownOutlined } from "@ant-design/icons";

interface UserTableProps {
  userData: User[];
}

const UserTable: React.FC<UserTableProps> = ({ userData }) => {
  const handleMenuClick = (key: string, record: User) => {
    if (key === "view") {
      console.log("View details:", record);
      // Add logic to view details
    } else if (key === "changeStatus") {
      console.log("Change status for:", record);
      // Add logic to change status
    }
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Role",
      dataIndex: ["roleId", "roleName"],
      key: "roleId",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: string, record: User) => {
        const menu = (
          <Menu
            onClick={(e) => handleMenuClick(e.key, record)}
            items={[
              { label: "View Details", key: "view" },
              { label: "Change Status", key: "changeStatus" },
            ]}
          />
        );

        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button>
              Actions <DownOutlined />
            </Button>
          </Dropdown>
        );
      },
    },
  ];

  return <Table dataSource={userData} columns={columns} rowKey="_id" />;
};

export default UserTable;
