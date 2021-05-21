import { FETCH_DEVICES, FETCH_DEVICES_SUCCESS, FETCH_CLASS_ERROR, FETCH_DEVICES_ERROR } from "../constants/action-types";


var initialState = {
  list: {
    isLoading: false,
    devices: [],
    message: "",
		total: 0,
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
    // case DELETE_TIMETABLES:
    //   return {
    //     ...state,
    //     list: {
    //       ...state.list,
    //       isLoading: true,
    //     },
    //   };
    // case DELETE_TIMETABLES_SUCCESS:
    //   return {
    //     ...state,
    //     list: {
    //       ...state.list,
    //       timetables: action.payload.data,
    //       isLoading: false,
    //       message: "Success",
    //     },
    //   };
    // case DELETE_TIMETABLES_ERROR:
    //   return {
    //     ...state,
    //     list: {
    //       ...state.list,
    //       isLoading: false,
    //       message: "Failed",
    //     },
    //   };
    default:
      return state;
  }
}

export default devicesReducer;