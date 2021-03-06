import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_ERROR,
  FETCH_ACCOUNTS_SUCCESS,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from "../constants/action-types";
import apis from "../apis/index";
import { notification } from "antd";
import { DecodeJwt } from "../../commom/DecodeJwt";

const redirectPage = (permission, history) => {
  permission === "ROLE_ADMIN"
    ? history.replace("/admin")
    : permission === "ROLE_TEACHER"
    ? history.push("/teacher")
    : history.push("/student");
};

const loginAction = (data, history) => (dispatch) => {
  dispatch({ type: LOGIN });

  apis.auth
    .login(data)
    .then((res) => {
      const { jwt: token } = res.data;
      let { username, permission, id } = DecodeJwt(token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          username,
          permission,
          id,
        },
      });
      localStorage.setItem("token", token);
      notification.success({
        message: "Login sucessfully",
        duration: 1.5,
      });

      redirectPage(permission, history);
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAILED,
        payload: {
          message: "Login is failed",
        },
      });
      notification.error({
        message: "Login Failed",
        description: "Username or Password is incorrect",
        duration: 2,
      });
    });
};

const getAccountUser = (page, pageSize) => (dispatch) => {
  dispatch({ type: FETCH_ACCOUNTS });
  apis.accounts
    .getAccountUser(page, pageSize)
    .then((res) => {
      dispatch({
        type: FETCH_ACCOUNTS_SUCCESS,
        payload: {
          data: res.data.data,
          total: res.data.total,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ACCOUNTS_ERROR,
      });
    });
};

const deleteAccountUer = (id, page, pageSize) => (dispatch) => {
  apis.accounts
    .deleteAccount(id)
    .then((res) => {
      dispatch(getAccountUser(page, pageSize));
    })
    .catch((err) => {
      console.log(err);
    });
};

const addAccountUser = (value, resolve, reject) => (dispatch) => {
  apis.accounts
    .addAccount(value)
    .then((res) => {
      notification.success({
        message: "Successful",
        duration: 1,
      });
      resolve && resolve();
    })
    .then((err) => {
      console.log(err);
      notification.error({
        message: "Add Account Failed",
        duration: 1,
      });
      reject && reject();
    });
};

const changeAccountUser = (value, accountId, resolve, reject) => (dispatch) => {
  apis.accounts
    .changeAccount(value, accountId)
    .then((res) => {
      notification.success({
        message: "Change Account Success",
        duration: 1,
      });
      resolve && resolve();
    })
    .catch((err) => {
      notification.error({
        message: "Username is exist",
        duration: 1,
      });
      reject && reject();
    });
};

export {
  loginAction,
  getAccountUser,
  deleteAccountUer,
  addAccountUser,
  changeAccountUser,
};
