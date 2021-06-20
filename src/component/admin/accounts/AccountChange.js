import React, { useEffect } from "react";
import { Input, Form, Button, Select } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { ADD_SCREEN, EDIT_SCREEN } from "../devices/constant";
import { addAccountUser, changeAccountUser } from "../../../redux/actions/auth";

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

function AccountChange({
  accountId,
  screen,
  onResetAccountTable,
  onCloseModalAccount,
}) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const accountList = useSelector((state) => state.accounts.list.accounts);

  useEffect(() => {
    if (accountId) {
      let defaultAccount = accountList.find(
        (account) => account.id === accountId
      );
      let { id, username, password, permission } = defaultAccount;
      form.setFieldsValue({
        id,
        username,
        password,
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
    } else {
      const changeAccount = new Promise((resolve, reject) => {
        let accountId = values.id;
        delete values.id;
        dispatch(changeAccountUser(values, accountId, resolve, reject));
      });
      await changeAccount;
      changeAccount.then(() => {
        onResetAccountTable();
        onCloseModalAccount();
      });
    }
  };

  return (
    <Form
      {...layout}
      form={form}
      validateMessages={validateMessages}
      onFinish={onFinish}
      layout="vertical"
      className="form-change-modal"
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
      <div className="btn-submit">
        <Button type="primary" htmlType="submit">
          <SaveOutlined />
          {/* {isAddingScreen ? "Add Timetable" : "Save Timetable"} */}
          Save
        </Button>
      </div>
    </Form>
  );
}

export default AccountChange;
