import React, { useEffect } from "react";
import { Input, Form, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const { Option } = Select;

const validateMessages = {
  required: "${label} is required!",
};

function AccountChange({ accountId }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (accountId) {
    }
  });

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      form={form}
      validateMessages={validateMessages}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Permission"
        name="permission"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Option value={1} key="1">
            Admin
          </Option>
          <Option value={3} key="3">
            Giáo viên
          </Option>
          <Option value={2} key="2">
            Học sinh
          </Option>
        </Select>
      </Form.Item>
    </Form>
  );
}

export default AccountChange;
