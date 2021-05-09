import React, { useState } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Avatar,
  Row,
  Typography,
  Col,
  Calendar,
} from "antd";
import {
  ScheduleOutlined,
  HomeOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { SiderWrapper, HeaderWrapper, ContentWrapper } from "./MenuStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Home from "../home/Home";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function MenuAdmin(props) {
  const path = window.location.pathname;
  const history = useHistory();
  const [key, setKey] = useState(["/timetable"]);
  const { children } = props;

  const onLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  const onRenderBreadCumb = () => {
    let items = path.split("/").slice(1);
    return (
      <Breadcrumb style={{ margin: "16px 0" }}>
        {items.map((item) => (
          <Breadcrumb.Item key={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderWrapper theme="light">
        <div className="logo">
          <Row justify="center" align="middle">
            <Avatar size={40}>A</Avatar>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "900",
                paddingLeft: "10px",
              }}
            >
              School Admin
            </span>
          </Row>
        </div>
        <Menu defaultSelectedKeys={path} mode="inline">
          <Menu.Item key="/admin" icon={<HomeOutlined />}>
            <Link to="/admin">Home</Link>
          </Menu.Item>
          <Menu.Item key="/admin/timetable" icon={<ScheduleOutlined />}>
            <Link to="/admin/timetable">Timetable</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </SiderWrapper>
      <Layout className="site-layout">
        <HeaderWrapper>
          <Row justify="space-between" align="middle">
            {onRenderBreadCumb()}
            <div>
              <Avatar size={30}>A</Avatar>
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  paddingLeft: "10px",
                  color: "rgb(255 255 255 / 86%)",
                }}
                onClick={onLogout}
              >
                Logout
              </span>
            </div>
          </Row>
        </HeaderWrapper>
        <ContentWrapper style={{ margin: "0 16px" }}>{children}</ContentWrapper>
        <Footer style={{ textAlign: "center" }}>Nguyen Dao Duy Kien</Footer>
      </Layout>
    </Layout>
  );
}

export default MenuAdmin;
