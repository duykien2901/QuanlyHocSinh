import Form from "antd/lib/form/Form";
import Modal from "antd/lib/modal/Modal";
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
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 0%), 0 2px 2px 0 rgb(0 0 0 / 14%),
        0 1px 5px 0 rgb(0 0 0 / 14%);
      background-color: #fff;

      .button-add {
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
          0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
      }
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

    input {
      height: 40px;
    }
  }

  .button-submit {
    .ant-form-item-control-input-content {
      display: flex;
      justify-content: center;
      margin-top: 35px;

      button {
        font-size: 16px;
        height: auto;
        border-radius: 5px;
        padding: 10px 20px;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
          0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
      }
    }
  }
  .ant-input-affix-wrapper {
    border-radius: 5px;

    input {
      height: 40px;
      font-size: 16px;
    }
  }

  .ant-select-selector {
    height: 40px;
    display: flex;
    align-items: center;
  }

  .btn-submit {
    margin: 30px;

    button {
      font-size: 16px;
      height: auto;
      border-radius: 5px;
      padding: 10px 20px;
      box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    }
  }
`;

export const AccountWrapper = styled.div`
  position: relative;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    position: absolute;
    width: 80%;
    margin: 0 10%;
    height: 69px;
    top: -25px;
    border-radius: 10px;
    background: linear-gradient(
      90deg,
      rgba(174, 82, 240, 1) 0%,
      rgba(240, 60, 236, 0.742734593837535) 100%
    );
    box-shadow: 0 0px 0px 0 rgb(0 0 0 / 20%),
      0 7px 10px -5px rgb(244 67 54 / 40%);

    .title-device {
      font-size: 20px;
      color: #fff;
    }

    .comment {
      font-size: 14px;
      color: #d8e0ff;
    }
  }
  .add-btn {
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
    font-size: 17px;
    height: 40px;
    width: 100px;
    border-radius: 5px;
  }

  .ant-table-wrapper {
    margin: 10px 20px 50px;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 0%), 0 2px 2px 0 rgb(0 0 0 / 14%),
      0 1px 5px 0 rgb(0 0 0 / 14%);

    th {
      background: #bccaff;
      font-size: 17px;
      font-weight: 550;

      .ant-table-filter-trigger {
        color: #000;
      }
    }

    .ant-table-pagination.ant-pagination {
      margin-right: 10px;
      margin-bottom: 30px;
    }
  }
`;

export const ModalWrapper = styled(Modal)`
  .form-change-modal {
    padding-left: 25%;

    input {
      height: 40px;
    }

    .ant-select-selector {
      height: 40px;
      display: flex;
      align-items: center;
    }

    .btn-submit {
      /* display: flex;
      justify-content: center; */
      margin-top: 50px;

      margin: 30px;
      button {
        font-size: 16px;
        height: auto;
        border-radius: 5px;
        padding: 10px 20px;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
          0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
      }
    }
  }
`;
