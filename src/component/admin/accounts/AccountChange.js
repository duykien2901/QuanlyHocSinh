import React, { useEffect } from "react";
import { Input, Form, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ADD_SCREEN, EDIT_SCREEN } from "../devices/constant";
import { addAccountUser } from "../../../redux/actions/auth";

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

function AccountChange({ accountId, screen, onResetAccountTable }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const accountList = useSelector((state) => state.accounts.list.accounts);

  useEffect(() => {
    if (accountId) {
      let defaultAccount = accountList.find(
        (account) => account.id === accountId
      );
      let { id, username, permission } = defaultAccount;
      form.setFieldsValue({
        id,
        username,
        password: "",
        permission,
      });
    }
  }, [accountId]);

  const onFinish = async (values) => {
    if (screen === ADD_SCREEN) {
      const addAccount = new Promise((resolve, reject) => {
        dispatch(addAccountUser(values, resolve, reject));
      });
      form.setFieldsValue({
        username: "",
        password: "",
        permission: "",
      });
      await addAccount;
      onResetAccountTable();
    }
  };

  return (
    <Form
      {...layout}
      form={form}
      validateMessages={validateMessages}
      onFinish={onFinish}
      layout="vertical"
    >
      {screen === EDIT_SCREEN && (
        <Form.Item
          label="Id"
          name="id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled />
        </Form.Item>
      )}
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
      <Form.Item>
        <Button htmlType="submit" type="primary">
          {screen === ADD_SCREEN ? "Add" : "Edit"}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AccountChange;
