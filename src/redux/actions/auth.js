
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "../constants/action-types";
import apis from "../apis/index"
import { notification } from "antd";

const loginAction = (data) => (dispatch)  => {
    dispatch({type: LOGIN});

    apis.login(data).then((res) => {
        const { userEntity: { username, permission}, jwt } = res.data;
        console.log(username);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                token: jwt,
                username,
                permission
            }
        });
        notification.success({
            message: "Login sucessfully",
            duration: 2
        })
    }).catch((error) => {
        dispatch({
            type: LOGIN_FAILED,
            payload: {
                message: "Login is failed",
            }
        })
        notification.error({
            message: "Login Failed",
            description: "Username or Password is incorrect",
            duration: 2
        })
    });
}

export {loginAction};
