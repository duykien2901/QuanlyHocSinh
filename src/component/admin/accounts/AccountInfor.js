import { Typography, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import apis from "../../../redux/apis";
import { AccountInforWrapper } from "./style";

function AccountInfor() {
  const [personalInfor, setPersonalInfor] = useState({});
  const { id } = useParams();

  useEffect(() => {
    apis.accounts.getAccountInfor(id).then((res) => {
      setPersonalInfor(res.data);
    });
  }, []);
  console.log(personalInfor);
  return (
    <div
      style={{
        margin: "24px",
        minHeight: 360,
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <AccountInforWrapper>
        <Typography.Paragraph style={{ fontSize: "20px" }}>
          Information
        </Typography.Paragraph>

        <Row>
          <Col span={12}>ss</Col>
          <Col span={12}>ss</Col>
        </Row>
      </AccountInforWrapper>
    </div>
  );
}

export default AccountInfor;
