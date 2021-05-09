import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../constants/action-types";
var intialState = {
  token: "",
  isLoading: false,
  username: "",
  isLoggedIn: false,
  errMessage: "",
  permission: "",
  id: 0,
};

var authReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      const { token, username, permission, id } = action.payload;
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        token,
        username,
        permission,
        id,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        errMessage: action.payload.message,
      };
    default:
      return state;
  }
};

export default authReducer;
