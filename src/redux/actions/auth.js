import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../constants/action-types";
import apis from "../apis/index";
import { notification } from "antd";
import { DecodeJwt } from "../../commom/DecodeJwt";

const loginAction = (data, history) => (dispatch) => {
  dispatch({ type: LOGIN });

  apis
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
        duration: 0.5,
      });

      if (permission === "ROLE_ADMIN") {
        setTimeout(() => {
          history.replace("/admin");
        }, 500);
      } else if (permission === "ROLE_TEACHER") {
        setTimeout(() => {
          history.replace("/teacher");
        }, 500);
      } else {
        setTimeout(() => {
          history.replace("/student");
        }, 500);
      }
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

export { loginAction };
