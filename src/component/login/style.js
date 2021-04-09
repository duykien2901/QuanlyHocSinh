import { Row } from "antd"
import styled from "styled-components"

export const LoginWrapper = styled(Row)`
  &.ant-row{
    height: inherit;
    align-items: center;
    background: rgb(227 228 230);        
    
    .col-wrap{
      z-index: 100;
      border-radius: 32px ;
      height: 700px;
      background-color: #fff;
      height: 700px;
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
      
      .row-wrap {
        height: inherit;

        .bg-side{
          border-radius: 32px 0 0 32px;
          background-image: url('https://kenh14cdn.com/2018/3/10/vietnd98-15206728332531354625292.png');
          background-repeat: no-repeat;
          background-size: cover;
        }

        .font-side {
          background-color: #f9f7f7;
          border-radius: 0 32px 32px 0;

          .avatar {
            margin-top: 20px;
            margin-bottom: 30px;
            box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
            background-color: #d02f5c;
          }
          .ant-typography {
            margin-bottom: 60px;
          }
          
          .ant-input-affix-wrapper { 
            font-size: 17px;
            border-radius: 17px;
            height: 50px;
            background-color: #ebf3fb;

            .ant-input-prefix {
              font-size: 22px;
              margin-right: 10px;
            }
          }

          .link-icon {
            .avatar-fb {
              /* margin-top: 20px;
              margin-bottom: 30px; */
              
              box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
              background-color: #0882ea;
            }

            .avatar-gg {
              box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
              background-color: #f90202;
            }

            .avatar-tw {
              box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
              background-color: #0f9c7c;
            }
          }
        }

        input {
          background-color: #ebf3fb;
          font-size: 17px;
        }

        input:focus{
          background-color: #ebf3fb;
          
        }

        button {
          width: 100%;
          font-size: 17px;
          border-radius: 10px;
          height: 45px;
          box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
        }
      }
    }
  }

`