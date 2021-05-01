import React from "react";
import axios from "axios";
import {
  Col,
  Row,
  Avatar,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
} from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import apis from "../../redux/apis";
import { LoginWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux"
import { loginAction } from "../../redux/actions/auth";
export default function LoginPage() {
  const dispacth = useDispatch();
  const {isLoading} = useSelector(state => state.auth)
  
  const layout = {
    labelCol: {
      span: 0,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 0,
      span: 24,
    },
  };
  const onFinish = (values) => {
    const data = {
      username: values.username,
      password: values.password
    }
    dispacth(loginAction(data));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  return (
    <LoginWrapper>
      <Col span={16} offset={4} className="col-wrap">
        <Row className={"row-wrap"}>
          <Col span={12} className={"bg-side"}></Col>
          <Col span={12} className={"font-side"}>
            <Row justify="center">
              <Avatar icon={<UserOutlined />} size={100} className={"avatar"} />
            </Row>
            <Row justify="center">
              <Typography.Title level={1}>Sign In</Typography.Title>
            </Row>
            <Row justify="center">
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: false,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                    {
                      validator: (_, value) => {
                        if (value.length < 3) {
                          return Promise.reject(
                            "Username length must bigger than 3!"
                          );
                        }
                        if (value.length > 24) {
                          return Promise.reject(
                            "Username length must smaller or equal than 24!"
                          );
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input
                    placeholder={"Enter Username *"}
                    prefix={<UserOutlined size={50} />}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder={"Enter Password *"}
                    prefix={<KeyOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  {...tailLayout}
                  name="remember"
                  valuePropName="checked"
                >
                  <Checkbox style={{ fontSize: "17px" }}>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit" loading={isLoading}>
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </Row>
            <Row justify="center" gutter={60} className={"link-icon"}>
              <Col>
                <Typography.Link href={"https://facebook.com"} target="_blank">
                  <Avatar
                    size={50}
                    icon={<FontAwesomeIcon icon={faFacebookF} />}
                    className={"avatar-fb"}
                  />
                </Typography.Link>
              </Col>
              <Col>
                <Typography.Link href={"http://google.com"}>
                  <Avatar
                    size={50}
                    icon={<FontAwesomeIcon icon={faGoogle} target="_blank"/>}
                    className={"avatar-gg"}
                  />
                </Typography.Link>
              </Col>
              <Col>
                <Typography.Link href={"http://twitter.com"} target="_blank">
                  <Avatar
                    size={50}
                    icon={<FontAwesomeIcon icon={faTwitter} />}
                    className={"avatar-tw"}
                  />
                </Typography.Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </LoginWrapper>
  );
}
