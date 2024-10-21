import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Button,
  message,
} from "antd";
import dayjs from "dayjs"; // For date manipulation
import { useCreateCouponMutation } from "../../../store/coupon/couponSlice"; // Adjust the import path as necessary

interface AddCouponProps {
  visible: boolean;
  onClose: () => void;
}

const AddCoupon: React.FC<AddCouponProps> = ({ visible, onClose }) => {
  const [createCoupon] = useCreateCouponMutation();
  const [form] = Form.useForm();

  const handleFinish = async (values: any) => {
    try {
      await createCoupon({
        ...values,
        validFrom: values.validFrom.toISOString(),
        validTo: values.validTo.toISOString(),
      }).unwrap();
      message.success("Coupon added successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      message.error("Failed to add coupon.");
    }
  };

  return (
    <Modal
      title="Add Coupon"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleFinish} layout="vertical">
        <Form.Item
          name="couponName"
          label="Coupon Name"
          rules={[{ required: true, message: "Please enter the coupon name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="code"
          label="Code"
          rules={[{ required: true, message: "Please enter the coupon code!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="validFrom"
          label="Valid From"
          rules={[
            { required: true, message: "Please select a valid from date!" },
          ]}
        >
          <DatePicker showTime />
        </Form.Item>
        <Form.Item
          name="validTo"
          label="Valid To"
          rules={[
            { required: true, message: "Please select a valid to date!" },
          ]}
        >
          <DatePicker showTime />
        </Form.Item>
        <Form.Item
          name="discountRate"
          label="Discount Rate (%)"
          rules={[
            { required: true, message: "Please enter the discount rate!" },
          ]}
        >
          <InputNumber min={0} max={100} />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[
            { required: true, message: "Please select the coupon status!" },
          ]}
        >
          <InputNumber min={0} max={1} />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Coupon
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCoupon;
