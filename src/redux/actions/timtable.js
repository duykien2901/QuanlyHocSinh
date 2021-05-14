import apis from "../apis";
import {
  FETCH_TIMETABLES,
  FETCH_TIMETABLES_SUCCESS,
  FETCH_TIMETABLES_ERROR,
  DELETE_TIMETABLES,
  DELETE_TIMETABLES_ERROR,
  DELETE_TIMETABLES_SUCCESS,
} from "../constants/action-types";

const getTimetable = (page, pageSize) => (dispatch) => {
  dispatch({ type: FETCH_TIMETABLES });
  apis
    .getTimetable(page, pageSize)
    .then((res) => {
      dispatch({
        type: FETCH_TIMETABLES_SUCCESS,
        payload: {
          data: res.data.data,
          total: res.data.total
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TIMETABLES_ERROR,
      });
    });
};

const deleteTimetable = (id, newTimetable) => (dispatch) => {
  apis
    .deleteTimetable(id)
    .then((res) => {
      dispatch({
        type: DELETE_TIMETABLES_SUCCESS,
        payload: {
          data: newTimetable,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_TIMETABLES_ERROR,
        payload: "Delete failed",
      });
    });
  // console.log(newTimetable);
};

export { getTimetable, deleteTimetable };
