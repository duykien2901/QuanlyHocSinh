import {LOGIN, LOGIN_SUCCESS,LOGIN_FAILED} from "../constants/action-types"
var intialState = {
    token: "",
    isLoading: false,
    username: "",
    isLoggedIn: false,
    errMessage: "",
    permission: ""
}

var authReducer = (state = intialState, action) => {
    switch(action.type) {
        case LOGIN: 
            return {
                ...state,
                isLoading: true,
                isLoggedIn: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                token: action.payload.token,
                username: action.payload.username,
                permission: action.payload.permission
            }
        case LOGIN_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
                errMessage: action.payload.message
            }
        default:
            return state;
    }
}

export default authReducer;