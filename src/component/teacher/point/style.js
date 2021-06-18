import Form from "antd/lib/form/Form";
import styled from "styled-components";

export const PointWrapper = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  margin: 24px;
  min-height: 650px;
  // height: "100%",
  background-color: #f9f9f9;
  font-family: sans-serif;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); */

  .ant-row {
    margin: 24px !important;

    /* .table-wrapper {
      min-height: 400px;
      box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
      opacity: ${(props) => (props.opacity ? 0.1 : 1)};
    } */

    .filter-btn {
      display: flex;
      margin-bottom: 15px;
      justify-content: flex-end;
      align-items: center;
      height: 50px;

      .filter-input {
        width: auto;
        border: none;
        border-bottom: 1px solid;
        margin-right: 10px;
        color: rgb(0 0 0 / 51%);
        background-color: #f9f9f9;
      }
    }
  }
`;

export const FormWrapper = styled(Form)`
  background-color: #fff;
  border-radius: 3px;
  padding: 15px;
  min-width: 400px;
  /* box-shadow: 0 2px 4px rgb(0 0 0 / 30%); */
  min-height: 400px;

  .ant-form-item-control-input-content {
    display: flex;
    justify-content: space-between;
  }
`;

export const TableWrapper = styled.div`
  min-height: 400px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
  opacity: ${(props) => (props.opacity ? 0.1 : 1)};
`;
