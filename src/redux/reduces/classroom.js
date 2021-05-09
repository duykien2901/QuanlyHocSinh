import {
  FETCH_CLASS,
  FETCH_CLASS_ERROR,
  FETCH_CLASS_SUCCESS,
} from "../constants/action-types";

var initialState = {
  list: {
    isLoading: false,
    listClass: [],
    message: "",
  },
};

let classReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
        },
      };
    case FETCH_CLASS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          listClass: action.payload.data,
          message: "successfull",
        },
      };
    case FETCH_CLASS_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          message: "Failed",
        },
      };
    default:
      return state;
  }
};

export default classReducer;
