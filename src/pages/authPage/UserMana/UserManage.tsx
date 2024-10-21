// src/components/StaffManage.tsx
import React, { useState, useEffect } from "react";
import { Flex, Input, Select, Spin } from "antd";
import { User } from "../../../types/type";
import UserTable from "./UserTable";
import { SearchOutlined } from "@ant-design/icons";
import { useGetUsersQuery } from "../../../store/user/userSlice";

const { Option } = Select;

const UserManage: React.FC = () => {
  const { data: staffData, isLoading, isError } = useGetUsersQuery();
  const [filteredStaff, setFilteredStaff] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string | undefined>(
    undefined
  );

  // Update staff data whenever search or selected role changes
  useEffect(() => {
    if (staffData) {
      const filtered = staffData.filter((staff) => {
        const matchesSearch = staff.fullName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesRole = selectedRole
          ? staff.roleId.roleName === selectedRole // Match the role name
          : true; // If no role is selected, include all

        return matchesSearch && matchesRole;
      });
      setFilteredStaff(filtered);
    }
  }, [searchQuery, selectedRole, staffData]);

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError) {
    return <div>Error loading staff data...</div>;
  }

  return (
    <div style={{ marginTop: 20 }}>
      <Flex justify={"space-between"}>
        <Input
          placeholder="Search by full name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginBottom: 16, width: "300px" }}
          size="large"
          prefix={<SearchOutlined />}
        />
        <Select
          placeholder="Filter by Role"
          style={{ width: 200, marginBottom: 16, marginLeft: 16 }}
          onChange={(value) => setSelectedRole(value)}
          allowClear
        >
          <Option value="Manager">Manager</Option>
          <Option value="Staff">Staff</Option>
          <Option value="Customer">Customer</Option>
        </Select>
      </Flex>
      <UserTable userData={filteredStaff} />
    </div>
  );
};

export default UserManage;
