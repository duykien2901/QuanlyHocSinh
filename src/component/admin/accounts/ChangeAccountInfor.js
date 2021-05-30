import { Col, Input, Row, Form, Button } from "antd";
import React from "react";

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 24,
  },
};

const validateMessages = {
  required: "${label} is required!",
};

function ChangeAccountInfor() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form
      validateMessages={validateMessages}
      {...layout}
      onFinish={onFinish}
      layout="vertical"
    >
      <Row justify="space-around">
        <Col span={9}>
          <Form.Item
            name="test"
            label="test1"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item name="test2" label="test2">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button htmlType="submit">s</Button>
      </Form.Item>
    </Form>
  );
}

export default ChangeAccountInfor;
