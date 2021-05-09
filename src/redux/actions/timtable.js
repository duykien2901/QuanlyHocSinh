import apis from "../apis";
import {
  FETCH_TIMETABLES,
  FETCH_TIMETABLES_SUCCESS,
  FETCH_TIMETABLES_ERROR,
} from "../constants/action-types";

const getTimetable = () => (dispatch) => {
  dispatch({ type: FETCH_TIMETABLES });
  apis
    .getTimetable()
    .then((res) => {
      dispatch({
        type: FETCH_TIMETABLES_SUCCESS,
        payload: {
          data: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TIMETABLES_ERROR,
      });
    });
};

export { getTimetable };
