import apis from "../apis";
import {
  FETCH_TEACHER,
	FETCH_TEACHER_ERROR,
  FETCH_TEACHER_SUCCESS,
} from "../constants/action-types";

const getListTeacher = () => (dispatch) => {
  dispatch({ type: FETCH_TEACHER });
  apis.getTeacherList().then((res) => {
    dispatch({
      type: FETCH_TEACHER_SUCCESS,
      payload: {
        data: res.data,
      },
    });
  }).catch((err) => {
		dispatch({
			type: FETCH_TEACHER_ERROR
		})
	})
};

export {getListTeacher};
