import styled from "styled-components";
import { Layout } from "antd"

const { Header, Content, Footer, Sider } = Layout;
export const SiderWrapper = styled(Sider)`
    &.ant-layout-sider {
        max-width: 300px !important;
        flex: 0 0 300px !important;
        min-width: 100px !important;
        width: 300px !important;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

        .logo {
            padding: 10px;
        }

        .ant-menu {
            font-size: 17px;
            
            .ant-menu-item, .ant-menu-submenu-title {
                padding-left: 24px;
                height: 60px;
                display: flex;
                align-items: center;    
            }

            .ant-menu-item:hover {
                background-color: #efefef;
            }
        
        }

    }
`

export const HeaderWrapper = styled(Header)`
    &.ant-layout-header{
        background-color: #1976d2;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

        .ant-typography {
            font-size: 23px;
            color: #fff;
        }
    }
`

export const ContentWrapper = styled(Content)`
    .ant-breadcrumb {
        font-size: 18px;
    }
    .ant-col {
        
       
       .test {
            height: auto;
            background-color: #fff;
            border-radius: 15px;
            box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%), 0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%);
            display: flex;
            flex-direction: column;
            align-items: center;

            .icon-teacher {
                font-size: 30px;
                color: #30a5ff;
								margin-top: 10px;
            }

            .count {
                font-size: 30px;
                font-weight: 700;
            }

						.name {
							font-size: 17px;
    					color: #b1a9a9;
							margin-bottom: 10px;
						}
						.icon-student {
                font-size: 30px;
                color: #1ebfae;
								margin-top: 10px;
            }

						.icon-classroom {
							color: #ffb53e;
							font-size: 30px;
							margin-top: 10px;
						}

						.icon-device {
							color: #ff7875;
							font-size: 30px;
							margin-top: 10px;
						}
       }

			 .calendar {
				box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%), 0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%);

			 }
    }
    
`