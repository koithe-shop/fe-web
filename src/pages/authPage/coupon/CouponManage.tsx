// src/components/CouponManage.tsx
import React, { useState, useEffect } from "react";
import { Input, Select, Spin, Button } from "antd";
import { Coupon } from "../../../types/type"; // Assuming you have a Coupon type defined
import { SearchOutlined } from "@ant-design/icons";
import { useGetAllCouponQuery } from "../../../store/coupon/couponSlice";
import CouponTable from "./CouponTable"; // Import the new CouponTable component
import AddCoupon from "./AddCoupon"; // Import the new AddCoupon component

const { Option } = Select;

const CouponManage: React.FC = () => {
  const { data: couponData, isLoading, isError } = useGetAllCouponQuery();
  const [filteredCoupons, setFilteredCoupons] = useState<Coupon[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<number | undefined>(
    undefined
  );
  const [isAddCouponModalVisible, setIsAddCouponModalVisible] = useState(false); // State for modal visibility

  // Update coupon data whenever search or selected status changes
  useEffect(() => {
    if (couponData) {
      const filtered = couponData.filter((coupon) => {
        const matchesSearch = coupon.couponName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesStatus =
          selectedStatus !== undefined
            ? coupon.status === selectedStatus
            : true;

        return matchesSearch && matchesStatus;
      });
      setFilteredCoupons(filtered);
    }
  }, [searchQuery, selectedStatus, couponData]);

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError) {
    return <div>Error loading coupon data...</div>;
  }

  const handleAddCouponModalOpen = () => {
    setIsAddCouponModalVisible(true);
  };

  const handleAddCouponModalClose = () => {
    setIsAddCouponModalVisible(false);
  };

  return (
    <div>
      <Input
        placeholder="Search by coupon name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: 16, width: "300px" }}
        size="large"
        prefix={<SearchOutlined />}
      />
      <Select
        placeholder="Filter by Status"
        style={{ width: 200, marginBottom: 16, marginLeft: 16 }}
        onChange={(value) => setSelectedStatus(value)}
        allowClear
      >
        <Option value={1}>Active</Option>
        <Option value={0}>Inactive</Option>
      </Select>
      <Button
        type="primary"
        onClick={handleAddCouponModalOpen}
        style={{ marginLeft: 16 }}
      >
        Add Coupon
      </Button>
      <CouponTable filteredCoupons={filteredCoupons} />{" "}
      {/* Use the new CouponTable component */}
      <AddCoupon
        visible={isAddCouponModalVisible}
        onClose={handleAddCouponModalClose}
      />{" "}
      {/* Use the new AddCoupon modal */}
    </div>
  );
};

export default CouponManage;
