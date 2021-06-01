import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_ERROR,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNT_INFOR,
  FETCH_ACCOUNT_INFOR_ERROR,
  FETCH_ACCOUNT_INFOR_SUCCESS,
} from "../constants/action-types";

var initialState = {
  list: {
    isLoading: false,
    message: "",
    accounts: [],
    total: 0,
  },
  accountInfor: {
    isLoading: false,
    message: "",
    infor: {},
  },
};

var accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
        },
      };
    case FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          accounts: action.payload.data,
          total: action.payload.total,
          message: "success",
        },
      };
    case FETCH_ACCOUNTS_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          message: "error",
          accounts: [],
        },
      };
    case FETCH_ACCOUNT_INFOR:
      return {
        ...state,
        accountInfor: {
          ...state.accountInfor,
          isLoading: true,
        },
      };
    case FETCH_ACCOUNT_INFOR_SUCCESS:
      return {
        ...state,
        accountInfor: {
          ...state.accountInfor,
          isLoading: false,
          infor: action.payload,
          message: "Success",
        },
      };
    case FETCH_ACCOUNT_INFOR_ERROR:
      return {
        ...state,
        accountInfor: {
          ...state.accountInfor,
          isLoading: false,
          message: "Error",
        },
      };
    default:
      return state;
  }
};
export default accountReducer;
