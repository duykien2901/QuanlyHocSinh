import React from 'react'
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faUserGraduate,
  faSchool,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import CalendarHome from './CalendarHome';
import { Card } from 'antd';
import ChartSider from "./ChartSider"

const { Meta } = Card;
export default function Home() {
    return (
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
            <Row style={{marginTop: "30px"}} gutter={[40, 40]}>
              <Col span={16}>
                <div className="calendar">
                 <CalendarHome/>
                </div>
              </Col>
             
              <Col span={8}>
                <ChartSider/>
              </Col>
            </Row>
            
          </div>
    )
}
