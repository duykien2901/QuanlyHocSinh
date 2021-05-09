import { FETCH_COURSE, FETCH_COURSE_ERROR, FETCH_COURSE_SUCCESS } from "../constants/action-types";


var initialState = {
  list: {
    isLoading: false,
    listCourse: [],
    message: "",
  },
};

let courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
        },
      };
    case FETCH_COURSE_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          listCourse: action.payload.data,
          message: "successfull",
        },
      };
    case FETCH_COURSE_ERROR:
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

export default courseReducer;
