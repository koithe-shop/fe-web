import { Table, Modal, Form, Input, Button, Select, notification } from "antd";
import { Product } from "../../../types/product";
import React, { useState } from "react";
import { useUpdateProductMutation, useGetProductsQuery } from "../../../store/product/apiSlice";
const { Option } = Select;

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const { refetch } = useGetProductsQuery(); // Fetch products to refetch after update

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentProduct(null);
  };

  const handleOk = async (values: Partial<Product>) => {
    if (currentProduct) {
      const updatedProduct = {
        ...currentProduct, // Retain the existing data
        productName: values.productName,
        price: values.price,
        gender: values.gender,
        size: values.size,
        yob: values.yob,
        status: values.status,
        madeBy: values.madeBy
      };

      try {
        await updateProduct({ id: currentProduct._id, product: updatedProduct }).unwrap();
        notification.success({
          message: "Cập nhật thành công",
          description: "Sản phẩm đã được cập nhật thành công!"
        });

        await refetch(); // Refetch products to reload the product list
        handleCancel(); // Close the modal
      } catch (error) {
        notification.error({
          message: "Cập nhật thất bại",
          description: "Đã có lỗi xảy ra khi cập nhật sản phẩm!"
        });
      }
    }
  };

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
      width: 200
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (text: number) => <span>{text} VND</span>,
      width: 120
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      render: (text: boolean) => <span>{text ? "Đực" : "Cái"}</span>,
      width: 100
    },
    {
      title: "Kích thước",
      dataIndex: "size",
      key: "size",
      width: 120
    },
    {
      title: "Năm sinh",
      dataIndex: "yob",
      key: "yob",
      width: 100
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => <span>{status === "Available" ? "Có sẵn" : "Hết hàng"}</span>,
      width: 120
    },
    {
      title: "Xuất xứ",
      dataIndex: "madeBy",
      key: "madeBy",
      width: 200
    }
  ];

  return (
    <>
      <Table
        dataSource={products}
        columns={columns}
        rowKey={(record) => record._id}
        onRow={(record) => ({
          onClick: () => handleEdit(record)
        })}
        scroll={{ x: "max-content" }}
        pagination={false}
      />

      {currentProduct && (
        <Modal title="Chỉnh sửa sản phẩm" visible={isModalVisible} onCancel={handleCancel} width={800} footer={null}>
          <Form initialValues={currentProduct} onFinish={handleOk}>
            <Form.Item name="productName" label="Tên sản phẩm" rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="price" label="Giá" rules={[{ required: true, message: "Vui lòng nhập giá!" }]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item name="gender" label="Giới tính">
              <Select defaultValue={currentProduct.gender ? "Đực" : "Cái"}>
                <Option value={true}>Đực</Option>
                <Option value={false}>Cái</Option>
              </Select>
            </Form.Item>
            <Form.Item name="size" label="Kích thước">
              <Input type="number" />
            </Form.Item>
            <Form.Item name="yob" label="Năm sinh">
              <Input type="number" />
            </Form.Item>
            <Form.Item name="status" label="Trạng thái">
              <Select defaultValue={currentProduct.status}>
                <Option value="Available">Có sẵn</Option>
                <Option value="Sold">Hết hàng</Option>
              </Select>
            </Form.Item>
            <Form.Item name="madeBy" label="Xuất xứ">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Lưu
              </Button>
              <Button onClick={handleCancel} style={{ marginLeft: 8 }}>
                Hủy
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ProductTable;
