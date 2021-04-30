import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Avatar, Row, Typography, Col, Calendar } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
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
// import Timetable from "../component/timetable/Timetable";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function MenuAdmin() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
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
        <Menu defaultSelectedKeys={["1"]} mode="inline">
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
              >
                Logout
              </span>
            </div>
          </Row>
        </HeaderWrapper>
        <ContentWrapper style={{ margin: "0 16px" }}>
         
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, height: "100%" }}
          >
            <Row gutter={[50, 50]}>
              <Col span={6}>
                <div className="test">
                  <div className="icon-teacher">
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                  </div>
                  <div className="count">120</div>
                  <div className="name">Teacher</div>
                </div>
              </Col>
              <Col span={6}>
                <div className="test">
                  <div className="icon-student">
                    <FontAwesomeIcon icon={faUserGraduate} />
                  </div>
                  <div className="count">120</div>
                  <div className="name">Student</div>
                </div>
              </Col>
              <Col span={6}>
                <div className="test">
                  <div className="icon-classroom">
                    <FontAwesomeIcon icon={faSchool} />
                  </div>
                  <div className="count">120</div>
                  <div className="name">Classroom</div>
                </div>
              </Col>
              <Col span={6}>
                <div className="test">
                  <div className="icon-device">
                    <FontAwesomeIcon icon={faHammer} />
                  </div>
                  <div className="count">120</div>
                  <div className="name">Device</div>
                </div>
              </Col>
            </Row>
            <Row style={{marginTop: "30px"}}>
              <Col span={24}>
                <div className="calendar">
                  {/* <Timetable/> */}
                </div>
              </Col>
            </Row>
          </div>
        </ContentWrapper>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant U
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MenuAdmin;
