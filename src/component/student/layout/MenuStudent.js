import React, { useState, useEffect } from "react";
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
import { ScheduleOutlined, HomeOutlined } from "@ant-design/icons";
import {
  faChalkboardTeacher,
  faUserGraduate,
  faSchool,
  faHammer,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { SiderWrapper, HeaderWrapper, ContentWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterTimetable } from "../../../redux/actions";
import { checkPermission } from "../../../commom/CheckPermission";
import PageNotFound from "../../../commom/PageNotFound";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function MenuStudent({ children }) {
  const dispatch = useDispatch();
  const [key, setKey] = useState(["/timetable"]);
  const history = useHistory();
  const path = window.location.pathname;
  const permission = checkPermission();

  //   useEffect(() => {
  //     dispatch(filterTimetable());
  //   }, []);

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

  const onRenderDefaultKeyMenu = () => {
    let defaultKey = path.includes("/admin/timetable")
      ? "/admin/timetable"
      : path.includes("/admin/device")
      ? "/admin/device"
      : path.includes("/admin/account-people")
      ? "/admin/account-people"
      : "/admin";
    return defaultKey;
  };

  return permission === "ROLE_STUDENT" ? (
    <Layout style={{ minHeight: "100vh", background: "#f65f6f8" }}>
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
              School Student
            </span>
          </Row>
        </div>
        <Menu
          defaultSelectedKeys={onRenderDefaultKeyMenu()}
          mode="inline"
          key={key}
        >
          <Menu.Item key="/admin" icon={<HomeOutlined />}>
            <Link to="/admin">Home</Link>
          </Menu.Item>
          <Menu.Item key={"/admin/timetable"} icon={<ScheduleOutlined />}>
            <Link to="/admin/timetable">Timetable</Link>
          </Menu.Item>
          <Menu.Item
            key="/admin/device"
            icon={<FontAwesomeIcon icon={faHammer} />}
          >
            <Link to="/admin/device">Devices</Link>
          </Menu.Item>
          <Menu.Item
            key="/admin/account-people"
            icon={
              <FontAwesomeIcon
                icon={faUserCircle}
                style={{ fontSize: "20px" }}
              />
            }
          >
            <Link to="/admin/account-people">Account People</Link>
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
  ) : (
    <PageNotFound history={history} />
  );
}

export default MenuStudent;
