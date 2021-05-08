import {
  FETCH_TIMETABLES,
  FETCH_TIMETABLES_SUCCESS,
  FETCH_TIMETABLES_ERROR,
} from "../constants/action-types";

var initialState = {
    list: {
        isLoading: false,
        timetabes: [],
        message: "",
        total: 0,
    }
}

var timetablesReducer = (state = initialState, action) => dispatch => {
    switch(action.type) {
        case FETCH_TIMETABLES:
            return {
                ...state,
                list: {
                    ...state.list,
                    message: "",
                    isLoading: true,
                }
            }
        case FETCH_TIMETABLES_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    message: "Success",
                    isLoading: false
                }
            }
        case FETCH_TIMETABLES_ERROR:
            return {
                ...state,
                list: {
                    ...state.list,
                    message: "Failed",
                    isLoading: false
                }
            }
        default:
            return state;
    }
}

export default timetablesReducer;