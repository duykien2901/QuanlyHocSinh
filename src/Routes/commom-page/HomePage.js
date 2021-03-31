import React, { useState } from "react";
import { Header, MenuWrapper } from "./style";
import "antd/dist/antd.css";
import { Button, Menu, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function HomePage() {
	const [currentTab, setCurrentTab] = useState("home")

	const handleClick = (e) => {
		setCurrentTab(e.key);
	} 

	const slide = () => {
		const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
			autoplay :true,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
	}
  return (
    <>
      <Header>
        <div className="img-logo">
          <img
            src={`${process.env.PUBLIC_URL}/imgae/hust.686b5882.png`}
            alt=""
          />
        </div>
        <div>
          <Button type="primary" icon={ <UserOutlined /> }>
            Đăng nhập
          </Button>
        </div>
      </Header>

			<MenuWrapper onClick={handleClick} selectedKeys = {currentTab} mode="horizontal" theme="dark">
				<Menu.Item key={"home"}>
					Trang chủ
				</Menu.Item>
				<Menu.Item key={"account"}>
					Trang cá nhân
				</Menu.Item>
			</MenuWrapper>
			<Row>
				<Col offset={3} span={18}>
					<img src={`${process.env.PUBLIC_URL}/imgae/banner.png`} alt="" style={{width: "100%"}}/>
				</Col>
			</Row>
			{slide()}
    </>
  );
}

export default HomePage;
