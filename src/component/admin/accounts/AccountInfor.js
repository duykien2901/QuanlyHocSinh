import { Typography, Row, Col, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import apis from "../../../redux/apis";
import { AccountInforWrapper } from "./style";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeAccountInfor from "./ChangeAccountInfor";

const { Text, Paragraph, Title } = Typography;

function AccountInfor() {
  const [personalInfor, setPersonalInfor] = useState({});
  const { id } = useParams();

  useEffect(() => {
    apis.accounts.getAccountInfor(id).then((res) => {
      setPersonalInfor(res.data);
    });
  }, []);

  const formatDate = (date) => {
    let newDate = new Date(date);
    newDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
    return newDate;
  };
  return (
    <AccountInforWrapper>
      <Paragraph className="title-infor">
        <FontAwesomeIcon
          icon={faUserCircle}
          style={{ fontSize: "40px", margin: 10 }}
        />
        Information of User
      </Paragraph>

      <Row className="user-wrapper" gutter={[45, 45]}>
        <Col span={24}>
          <div className="user-details-wrapper">
            {/* <Paragraph className="user-title">User Details</Paragraph> */}
            <Row justify="space-between">
              <Button>back</Button>
              <Button>Update</Button>
            </Row>
            <Row>
              <Col span={12}>
                <Row className="user-details">
                  <Col span={6} className="user-details-title">
                    First name
                  </Col>
                  <Col span={18}>: {personalInfor.firstName}</Col>
                </Row>

                <Row className="user-details">
                  <Col span={6} className="user-details-title">
                    Last name
                  </Col>
                  <Col span={18}>: {personalInfor.lastName}</Col>
                </Row>

                <Row className="user-details">
                  <Col span={6} className="user-details-title">
                    Gender
                  </Col>
                  <Col span={18}>: {personalInfor.gender}</Col>
                </Row>

                <Row className="user-details">
                  <Col span={6} className="user-details-title">
                    Date of birth
                  </Col>
                  <Col span={18}>: {formatDate(personalInfor.dateOfBirth)}</Col>
                </Row>
                <Row className="user-details">
                  <Col span={6} className="user-details-title">
                    Address
                  </Col>
                  <Col span={18}>: {personalInfor.address}</Col>
                </Row>
              </Col>

              <Col span={12}>
                <Row className="user-details">
                  <Col span={6} className="user-details-title">
                    Ethnicity
                  </Col>
                  <Col span={18}>: {personalInfor.ethnicity}</Col>
                </Row>

                <Row className="user-details">
                  <Col span={6} className="user-details-title">
                    Religion
                  </Col>
                  <Col span={18}>: {personalInfor.religion}</Col>
                </Row>

                <Row className="user-details">
                  <Col span={6} className="user-details-title">
                    Phone number
                  </Col>
                  <Col span={18}>: {personalInfor.phoneNumber}</Col>
                </Row>

                <Row className="user-details">
                  <Col span={6} className="user-details-title">
                    Email
                  </Col>
                  <Col span={18}>: {personalInfor.email}</Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        {/* <Col span={10}>
          <div className="user-details-wrapper">
            <ChangeAccountInfor />
          </div>
        </Col> */}
      </Row>
    </AccountInforWrapper>
  );
}

export default AccountInfor;
