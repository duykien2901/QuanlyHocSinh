import Form from "antd/lib/form/Form";
import styled from "styled-components";

export const AccountInforWrapper = styled.div`
  /* margin: 24px;

  box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%),
    0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%); */
  margin: 24px;
  min-height: 650px;
  // height: "100%",
  background-color: #f9f9f9;
  font-family: sans-serif;

  .title-infor {
    font-size: 25px;
    display: flex;
    align-items: center;
  }

  .user-wrapper {
    margin: 24px !important;

    .user-details-wrapper {
      padding-bottom: 20px;
      min-height: 450px;
      box-sizing: border-box;
      border-radius: 0.5em;
      box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%),
        0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%);
      background-color: #fff;

      .button-back {
        margin: 15px;
        padding: 5px;
        background-color: #f1f1f1;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;

        :hover {
          background-color: #e6e6e6;
          cursor: pointer;
        }
      }

      .button-edit {
        border-radius: 4px;
        margin: 13px;
        height: 37px;
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
          0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
      }

      .user-title {
        margin-left: 15px;
        padding-top: 10px;
        font-size: 20px;
        font-weight: 700;
      }
      .user-details {
        font-size: 16px;
        margin-left: 90px;
        padding-top: 10px;
        margin-top: 25px;

        .user-details-title {
          font-weight: 700;
          width: 50px;
        }
      }
    }
  }
`;

export const FormAccountWrapper = styled(Form)`
  .ant-picker {
    width: 100%;
  }

  .button-submit {
    .ant-form-item-control-input-content {
      display: flex;
      justify-content: center;
      margin-top: 35px;
    }
  }
`;
