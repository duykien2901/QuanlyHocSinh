import {
  FETCH_DEVICES,
  FETCH_DEVICES_SUCCESS,
  FETCH_DEVICES_ERROR,
  ADD_DEVICES,
  ADD_DEVICES_SUCCESS,
  ADD_DEVICES_ERROR,
  CHANGE_DEVICES,
  CHANGE_DEVICES_SUCCESS,
  CHANGE_DEVICES_ERROR,
} from "../constants/action-types";

var initialState = {
  list: {
    isLoading: false,
    devices: [],
    message: "",
    total: 0,
  },
  add: {
    isLoading: false,
    message: "",
  },
};

var devicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEVICES:
      return {
        ...state,
        list: {
          ...state.list,
          message: "",
          isLoading: true,
        },
      };
    case FETCH_DEVICES_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          devices: action.payload.data,
          total: action.payload.total,
          message: "Success",
          isLoading: false,
        },
      };
    case FETCH_DEVICES_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          devices: [],
          total: 0,
          message: "Failed",
          isLoading: false,
        },
      };
    case CHANGE_DEVICES:
    case ADD_DEVICES:
      return {
        ...state,
        add: {
          ...state.add,
          message: "",
          isLoading: true,
        },
      };
    case CHANGE_DEVICES_SUCCESS:
    case ADD_DEVICES_SUCCESS:
      return {
        ...state,
        add: {
          ...state.add,
          message: "success",
          isLoading: false,
        },
      };
    case CHANGE_DEVICES_ERROR:
    case ADD_DEVICES_ERROR:
      return {
        ...state,
        add: {
          ...state.add,
          message: "error",
          isLoading: false,
        },
      };
    default:
      return state;
  }
};

export default devicesReducer;
