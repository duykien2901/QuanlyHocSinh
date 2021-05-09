import {
  FETCH_TEACHER,
  FETCH_TEACHER_ERROR,
	FETCH_TEACHER_SUCCESS,
} from "../constants/action-types";

var initialState = {
  list: {
    isLoading: false,
    listTeacher: [],
    message: "",
  },
};

let teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEACHER:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
        },
      };
    case FETCH_TEACHER_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          listTeacher: action.payload.data,
          message: "successfull",
        },
      };
    case FETCH_TEACHER_ERROR:
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

export default teacherReducer;
