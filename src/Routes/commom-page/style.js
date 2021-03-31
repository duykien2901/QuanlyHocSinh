import styled from "styled-components"
import {Menu} from "antd";
export const Header = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(220,225,135,0.44611347957151615) 0%, rgba(244,236,1,0.5777661406359419) 0%, rgba(255,235,0,0.10437678489364499) 100%);
    height: 120px;
    padding: 0 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .img-logo {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .ant-btn {
        border-radius: 18px;
        height: 40px;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    }
`

export const MenuWrapper = styled(Menu)`
  
    &.ant-menu.ant-menu-dark {
        padding: 0 150px;

        .ant-menu-item-selected {
            background-color: #798690;
        }
    }

    &.ant-menu-dark.ant-menu-horizontal {
        .ant-menu-item:hover {
            background-color: #76add8;
        }
    }
    
`
