import {
  FETCH_TIMETABLES,
  FETCH_TIMETABLES_SUCCESS,
  FETCH_TIMETABLES_ERROR,
  DELETE_TIMETABLES,
  DELETE_TIMETABLES_SUCCESS,
  DELETE_TIMETABLES_ERROR,
} from "../constants/action-types";

var initialState = {
  list: {
    isLoading: false,
    timetables: [],
    message: "",
    total: 0,
  },
};

var timetablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TIMETABLES:
      return {
        ...state,
        list: {
          ...state.list,
          message: "",
          isLoading: true,
        },
      };
    case FETCH_TIMETABLES_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          timetables: action.payload.data,
          message: "Success",
          isLoading: false,
        },
      };
    case FETCH_TIMETABLES_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          message: "Failed",
          isLoading: false,
        },
      };
    case DELETE_TIMETABLES:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
        },
      };
    case DELETE_TIMETABLES_SUCCESS:
      return {
        ...state,
        list: {
          timetables: action.payload.data,
          isLoading: false,
          message: "Success",
        },
      };
    case DELETE_TIMETABLES_ERROR:
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

export default timetablesReducer;
