import styled from "styled-components";

export const AccountInforWrapper = styled.div`
  /* margin: 24px;

  box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%),
    0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%); */
  margin: 24px;
  min-height: 560px;
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
      min-height: 400px;
      box-sizing: border-box;
      border-radius: 0.5em;
      box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%),
        0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%);
      background-color: #fff;

      .user-title {
        margin-left: 15px;
        padding-top: 10px;
        font-size: 20px;
        font-weight: 700;
      }
      .user-details {
        font-size: 16px;
        margin-left: 50px;
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
