import { Col, Input, Row, Form, Button, DatePicker, notification } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useState } from "react";
import { formatDate } from "../../../commom/FormatDate";
import moment from "moment";
import apis from "../../../redux/apis";
import { FormAccountWrapper } from "./style";
import { useParams } from "react-router";
const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 24,
  },
};

const tailayout = {
  wrapperCol: {
    offset: 12,
    span: 12,
  },
};

const validateMessages = {
  required: "${label} is required!",
};

const configHeader = {
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
};

const dateFormat = "YYYY-MM-DD";
function ChangeAccountInfor({ personalInfor, updatePersonalInfor }) {
  const [form] = useForm();
  const [date, setDate] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (personalInfor) {
      const {
        address,
        // dateOfBirth,
        email,
        ethnicity,
        firstName,
        gender,
        lastName,
        phoneNumber,
        religion,
        id,
      } = personalInfor;
      form.setFieldsValue({
        address,
        dateOfBirth: moment(formatDate(personalInfor.dateOfBirth), dateFormat),
        email,
        ethnicity,
        firstName,
        gender,
        id,
        lastName,
        phoneNumber,
        religion,
      });
    } else {
      form.setFieldsValue({
        address: "",
        dateOfBirth: "",
        email: "",
        ethnicity: "",
        firstName: "",
        gender: "",
        id: "",
        lastName: "",
        phoneNumber: "",
        religion: "",
      });
    }
  }, []);

  const onFinish = (values) => {
    values.dateOfBirth = date;
    values.accountId = id;
    // values.id = 10;
    console.log(values);
    if (personalInfor) {
      apis.accounts
        .editAccountInfor(values)
        .then((res) => {
          updatePersonalInfor(values);
          notification.success({
            message: "Change Account Infor successfully",
            duration: 1,
          });
        })
        .catch((err) => {
          notification.error({
            message: "Change Account Infor Error",
            duration: 1,
          });
        });
    } else {
      apis.accounts
        .addAccountInfor(values)
        .then((res) => {
          updatePersonalInfor(values);
          notification.success({
            message: "Add Account Infor successfully",
            duration: 1,
          });
        })
        .catch((err) => {
          notification.error({
            message: "Add Account Infor Error",
            duration: 1,
          });
        });
    }
  };

  const onChange = (date, dateString) => {
    setDate(dateString);
  };
  return (
    <FormAccountWrapper
      validateMessages={validateMessages}
      {...layout}
      onFinish={onFinish}
      layout="vertical"
      form={form}
    >
      <Row justify="space-around">
        <Col span={9}>
          {personalInfor && (
            <Form.Item
              name="id"
              label="Id"
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
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="dateOfBirth"
            label="Date of birth"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker onChange={onChange} format={dateFormat} />
          </Form.Item>
        </Col>

        <Col span={9}>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="ethnicity"
            label="Ethnicity"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="religion"
            label="Religion"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone number"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="email" allowClear />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item className="button-submit">
        <Button htmlType="submit" type="primary">
          {personalInfor ? "Update" : "Add"}
        </Button>
      </Form.Item>
    </FormAccountWrapper>
  );
}

export default ChangeAccountInfor;
