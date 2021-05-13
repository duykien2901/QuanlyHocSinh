import apis from "../apis";
import {
  FETCH_CLASS,
  FETCH_CLASS_ERROR,
  FETCH_CLASS_SUCCESS,
} from "../constants/action-types";

const getClassroomList = () => (dispatch) => {
  dispatch({
    type: FETCH_CLASS,
  });
  apis
    .getClassroomList()
    .then((res) => {
      dispatch({
        type: FETCH_CLASS_SUCCESS,
        payload: {
          data: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_CLASS_ERROR,
      });
    });
};
export { getClassroomList };
