import apis from "../apis";
import {
  FETCH_COURSE,
  FETCH_COURSE_ERROR,
  FETCH_COURSE_SUCCESS,
} from "../constants/action-types";

const getCourseList = () => (dispatch) => {
  dispatch({
    type: FETCH_COURSE,
  });
  apis.course
    .getCourseList()
    .then((res) => {
      dispatch({
        type: FETCH_COURSE_SUCCESS,
        payload: {
          data: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_COURSE_ERROR,
      });
    });
};
export { getCourseList };
