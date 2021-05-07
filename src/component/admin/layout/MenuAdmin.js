import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Avatar, Row, Typography, Col, Calendar } from "antd";
import {
  ScheduleOutlined,
  HomeOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { SiderWrapper, HeaderWrapper, ContentWrapper } from "./MenuStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faUserGraduate,
  faSchool,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import Home from "../home/Home";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
// import Timetable from "../component/timetable/Timetable";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function MenuAdmin(props) {
 
  const {path} = useRouteMatch();
  const history = useHistory();

  const {children} = props;
  console.log(children);

  const onLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  }
  
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
        <Menu defaultSelectedKeys={["/admin"]} mode="inline">
          <Menu.Item key="/admin" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<ScheduleOutlined />}>
            Thời khóa biểu
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </SiderWrapper>
      <Layout className="site-layout">
        <HeaderWrapper>
          <Row justify="space-between" align="middle">
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Timetable</Breadcrumb.Item>
            <Breadcrumb.Item>Timetable</Breadcrumb.Item>
          </Breadcrumb>
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
        <ContentWrapper style={{ margin: "0 16px" }}>
         {/* <Switch>
           <Route exact path={}}
           </Route>
         </Switch> */}
         {children}

         {/* <Home/> */}
         
         
        </ContentWrapper>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant 
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MenuAdmin;
