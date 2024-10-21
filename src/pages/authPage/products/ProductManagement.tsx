import React, { useState } from "react";
import { Table, Button, Spin, Alert, Modal, Form, Input, Upload, Select } from "antd";
import { useGetProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } from "../../../store/product/apiSlice";
import { Product } from "../../../types/product";

const { Option } = Select;

const ProductManagement: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [visible, setVisible] = useState(false);

  const handleEdit = (product: Product) => {
    Modal.info({
      title: "Edit Product",
      content: <ProductForm initialValues={product} onSubmit={updateProduct} />
    });
  };

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
  };

  const handleCreate = async (values: any) => {
    await createProduct(values);
    setVisible(false);
  };

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName"
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (text: number) => <span>{text} VND</span>
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      render: (text: boolean) => <span>{text ? "Đực" : "Cái"}</span>
    },
    {
      title: "Kích thước",
      dataIndex: "size",
      key: "size"
    },
    {
      title: "Năm sinh",
      dataIndex: "yob",
      key: "yob"
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => <span>{status === "1" ? "Có sẵn" : "Hết hàng"}</span>
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: Product) => (
        <span>
          <Button onClick={() => handleEdit(record)} type="primary">
            Chỉnh sửa
          </Button>
          <Button onClick={() => handleDelete(record._id)} type="danger" style={{ marginLeft: 8 }}>
            Xóa
          </Button>
        </span>
      )
    }
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)} style={{ marginBottom: 16 }}>
        Thêm sản phẩm
      </Button>
      {isLoading && <Spin />}
      {error && <Alert message="Error" description={error.message} type="error" />}
      <Table dataSource={products} columns={columns} rowKey={(record) => record._id} />
      <Modal title="Tạo sản phẩm mới" visible={visible} onCancel={() => setVisible(false)} footer={null}>
        <ProductForm onSubmit={handleCreate} />
      </Modal>
    </div>
  );
};

// Component để chỉnh sửa hoặc tạo sản phẩm
const ProductForm: React.FC<{ initialValues?: Product; onSubmit: (product: Partial<Product>) => void }> = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    const productData = {
      ...values,
      ownerId: "string", // Thay đổi giá trị ownerId theo yêu cầu
      certificates: {
        origin: values.certificatesOrigin,
        health_status: values.certificatesHealthStatus,
        awards: values.certificatesAwards ? values.certificatesAwards.split(",").map((award: string) => award.trim()) : []
      },
      categoryId: values.categoryId, // Lưu categoryId
      genotypeId: values.genotypeId // Lưu genotypeId
    };
    onSubmit(productData);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish} initialValues={initialValues}>
      <Form.Item name="productName" label="Tên sản phẩm" rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="price" label="Giá" rules={[{ required: true, message: "Vui lòng nhập giá!" }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item name="size" label="Kích thước" rules={[{ required: true, message: "Vui lòng nhập kích thước!" }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item name="yob" label="Năm sinh" rules={[{ required: true, message: "Vui lòng nhập năm sinh!" }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item name="gender" label="Giới tính" valuePropName="checked">
        <Input type="checkbox" />
      </Form.Item>
      <Form.Item name="description" label="Mô tả">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="image" label="Hình ảnh">
        <Upload>
          <Button>Chọn hình ảnh</Button>
        </Upload>
      </Form.Item>

      {/* Certificates */}
      <Form.Item label="Giấy chứng nhận" style={{ marginBottom: 0 }}>
        <Form.Item name="certificatesOrigin" label="Nguồn gốc" rules={[{ required: true, message: "Vui lòng nhập nguồn gốc!" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="certificatesHealthStatus" label="Tình trạng sức khỏe" rules={[{ required: true, message: "Vui lòng nhập tình trạng sức khỏe!" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="certificatesAwards" label="Giải thưởng">
          <Input placeholder="Nhập các giải thưởng, cách nhau bởi dấu phẩy" />
        </Form.Item>
      </Form.Item>

      {/* Category Selection */}
      <Form.Item name="categoryId" label="Danh mục" rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}>
        <Select>
          <Option value="string">Cá</Option> {/* Thay đổi theo danh sách danh mục thực tế */}
        </Select>
      </Form.Item>

      {/* Genotype Selection */}
      <Form.Item name="genotypeId" label="Giống" rules={[{ required: true, message: "Vui lòng chọn giống!" }]}>
        <Select>
          <Option value="string">AA-BB</Option> {/* Thay đổi theo danh sách giống thực tế */}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductManagement;
