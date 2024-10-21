import React from "react";
import { Table } from "antd";
import { Coupon } from "../../../types/type"; // Assuming you have a Coupon type defined

interface CouponTableProps {
  filteredCoupons: Coupon[];
}

const CouponTable: React.FC<CouponTableProps> = ({ filteredCoupons }) => {
  const columns = [
    {
      title: "Coupon Name",
      dataIndex: "couponName",
      key: "couponName",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Valid From",
      dataIndex: "validFrom",
      key: "validFrom",
      render: (text: string) => new Date(text).toLocaleString(),
    },
    {
      title: "Valid To",
      dataIndex: "validTo",
      key: "validTo",
      render: (text: string) => new Date(text).toLocaleString(),
    },
    {
      title: "Discount Rate (%)",
      dataIndex: "discountRate",
      key: "discountRate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: number) => (status === 1 ? "Active" : "Inactive"),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  return (
    <Table
      dataSource={filteredCoupons}
      columns={columns}
      rowKey="_id"
      pagination={{ pageSize: 10 }}
    />
  );
};

export default CouponTable;
