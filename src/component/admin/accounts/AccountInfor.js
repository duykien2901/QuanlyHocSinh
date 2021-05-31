import { Typography, Row, Col, Button, Empty } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import apis from "../../../redux/apis";
import { AccountInforWrapper } from "./style";
import {
  faUserCircle,
  faArrowLeft,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeAccountInfor from "./ChangeAccountInfor";
import Modal from "antd/lib/modal/Modal";
import { formatDate } from "../../../commom/FormatDate";

const { Text, Paragraph, Title } = Typography;

function AccountInfor() {
  const [personalInfor, setPersonalInfor] = useState();
  const [onShowAccountChangeModal, setOnShowAccountChangeModal] = useState(
    false
  );
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    apis.accounts
      .getAccountInfor(id)
      .then((res) => {
        setPersonalInfor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updatePersonalInfor = (values) => {
    setPersonalInfor(values);
  };

  const onBackAccountList = () => {
    history.push("/admin/account-people");
  };

  const renderAccountChangeModal = () => (
    <Modal
      visible={onShowAccountChangeModal}
      title="Change account"
      centered
      onOk={() => setOnShowAccountChangeModal(false)}
      onCancel={() => setOnShowAccountChangeModal(false)}
      width={900}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
    >
      <ChangeAccountInfor
        personalInfor={personalInfor}
        updatePersonalInfor={updatePersonalInfor}
      />
    </Modal>
  );
  const renderEmptyPersonalInfor = () => (
    <Col span={24}>
      <div className="user-details-wrapper">
        <Row justify="space-between">
          <span className="button-back" onClick={onBackAccountList}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 30 }} />
          </span>
        </Row>
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 150,
          }}
          description={<span>No data about personal infor</span>}
        >
          <Button
            type="primary"
            className="button-add"
            onClick={() => setOnShowAccountChangeModal(true)}
          >
            Create Now
          </Button>
        </Empty>
      </div>
    </Col>
  );

  return (
    <AccountInforWrapper>
      {renderAccountChangeModal()}
      <Paragraph className="title-infor">
        <FontAwesomeIcon
          icon={faUserCircle}
          style={{ fontSize: "40px", margin: 10 }}
        />
        Information of User
      </Paragraph>

      <Row className="user-wrapper" gutter={[64, 64]}>
        {personalInfor ? (
          <Col span={24}>
            <div className="user-details-wrapper">
              <Row justify="space-between">
                <span className="button-back" onClick={onBackAccountList}>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ fontSize: 30 }}
                  />
                </span>
                <Button
                  type="primary"
                  className="button-edit"
                  onClick={() => setOnShowAccountChangeModal(true)}
                >
                  Update
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ fontSize: 18, marginLeft: 5 }}
                  />
                </Button>
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
                    <Col span={18}>
                      : {formatDate(personalInfor.dateOfBirth)}
                    </Col>
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
        ) : (
          renderEmptyPersonalInfor()
        )}
      </Row>
    </AccountInforWrapper>
  );
}

export default AccountInfor;
