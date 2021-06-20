import { Row, Table } from "antd";
import styled from "styled-components";

export const TimetableChangeWrapper = styled(Row)`
  &.ant-row {
    margin: 24px;
    min-height: 360px;
    height: 100%;
    background-color: #fff;

    .btn-back {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #e6e4e4;
      font-size: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 25px;
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 0%), 0 2px 2px 0 rgb(0 0 0 / 14%),
        0 1px 5px 0 rgb(0 0 0 / 14%);
    }

    .content {
      padding: 10px 20px 30px;
      margin-top: 50px;
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 14%),
        0px 1px 1px 0px rgb(0 0 0 / 15%), 0px 1px 3px 0px rgb(0 0 0 / 32%);
      border-radius: 5px;

      .title-change {
        display: flex;
        justify-content: center;
        margin: 20px 20px 30px;

        font-size: 28px;
      }

      .form-item {
        padding-left: 10%;

        .ant-form-item {
          margin-bottom: 35px;

          .ant-select-selector {
            height: 45px;
            align-items: center;
            font-size: 16px;
            border-radius: 4px;
          }
        }

        label {
          font-size: 17px;
        }

        input {
          height: 45px;
          border-radius: 4px;
        }
      }
      .btn-submit {
        display: flex;
        justify-content: center;
        margin: 30px;

        button {
          font-size: 17px;
          height: auto;
          border-radius: 5px;
          padding: 10px 20px;
          box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
            0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
        }
      }
    }
  }
`;

export const TableWrapper = styled.div`
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

    .title-timtable {
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
