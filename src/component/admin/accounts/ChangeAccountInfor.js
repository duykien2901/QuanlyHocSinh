import { Col, Input, Row, Form, Button, DatePicker } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect } from "react";
import { formatDate } from "../../../commom/FormatDate";
import moment from "moment";
import { FormAccountWrapper } from "./style";
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

const dateFormat = "YYYY/MM/DD";
function ChangeAccountInfor({ personalInfor }) {
  const [form] = useForm();

  useEffect(() => {
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
  }, []);

  const onFinish = (values) => {
    console.log(values.dateOfBirth._i);
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
            <DatePicker format={dateFormat} />
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
            <Input allowClear />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item className="button-submit">
        <Button htmlType="submit" type="primary">
          Update
        </Button>
      </Form.Item>
    </FormAccountWrapper>
  );
}

export default ChangeAccountInfor;
