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
import { faFileAlt, faTools } from "@fortawesome/free-solid-svg-icons";
import { SiderWrapper, HeaderWrapper, ContentWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkPermission } from "../../../commom/CheckPermission";
import PageNotFound from "../../../commom/PageNotFound";
import apis from "../../../redux/apis";
import {
  FETCH_ACCOUNT_INFOR_ERROR,
  FETCH_ACCOUNT_INFOR_SUCCESS,
} from "../../../redux/constants/action-types";
const { Footer } = Layout;

function MenuTeacher({ children }) {
  const dispatch = useDispatch();
  const [key, setKey] = useState(["/timetable"]);
  const accountId = useSelector((state) => state.auth.id);
  const accountInfor = useSelector(
    (state) => state.accounts.accountInfor.infor
  );
  const history = useHistory();
  const path = window.location.pathname;
  const permission = checkPermission();

  useEffect(() => {
    apis.accounts
      .getAccountInfor(accountId)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: FETCH_ACCOUNT_INFOR_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ACCOUNT_INFOR_ERROR });
      });
  }, []);

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

  return permission === "ROLE_TEACHER" ? (
    <Layout style={{ minHeight: "100vh", background: "#f65f6f8" }}>
      <SiderWrapper theme="light">
        <div className="logo">
          <Row justify="center" align="middle">
            <Avatar size={40}>{accountInfor.lastName?.charAt(0)}</Avatar>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "900",
                paddingLeft: "10px",
              }}
            >
              {accountInfor.firstName + " " + accountInfor.lastName}
            </span>
          </Row>
        </div>
        <Menu
          // defaultSelectedKeys={onRenderDefaultKeyMenu()}
          // mode="inline"
          key={key}
        >
          <Menu.Item
            key="/teacher"
            icon={<HomeOutlined style={{ fontSize: "20px" }} />}
          >
            <Link to="/teacher">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="/teacher/point"
            icon={
              <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: "20px" }} />
            }
          >
            <Link to="/teacher/point">Point management</Link>
          </Menu.Item>
          <Menu.Item
            key={"/teacher/device"}
            icon={
              <FontAwesomeIcon icon={faTools} style={{ fontSize: "20px" }} />
            }
          >
            <Link to={`/teacher/device`}>Device</Link>
          </Menu.Item>
          {/* <Menu.Item
            key="/admin/device"
            icon={<FontAwesomeIcon icon={faHammer} />}
          >
            <Link to="/admin/device">Devices</Link>
          </Menu.Item> */}
          {/* <Menu.Item
            key="/admin/account-people"
            icon={
              <FontAwesomeIcon
                icon={faUserCircle}
                style={{ fontSize: "20px" }}
              />
            }
          >
            <Link to="/admin/account-people">Account People</Link>
          </Menu.Item> */}
        </Menu>
      </SiderWrapper>
      <Layout className="site-layout">
        <HeaderWrapper>
          <Row justify="space-between" align="middle">
            {onRenderBreadCumb()}
            <div>
              <Avatar size={30}>{accountInfor.lastName?.charAt(0)}</Avatar>
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  paddingLeft: "10px",
                  color: "rgb(255 255 255 / 86%)",
                  cursor: "pointer",
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
    // <div>ss</div>
    <PageNotFound history={history} />
  );
}

export default MenuTeacher;
