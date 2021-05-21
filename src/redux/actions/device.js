import apis from "../apis";
import {
  FETCH_DEVICES,
  FETCH_DEVICES_ERROR,
  FETCH_DEVICES_SUCCESS,
} from "../constants/action-types";

const getPageDevice = (page, pageSize) => (dispatch) => {
  dispatch({ type: FETCH_DEVICES });

  apis.devices
    .getPageDevice(page, pageSize)
    .then((res) => {
      dispatch({
        type: FETCH_DEVICES_SUCCESS,
        payload: {
          data: res.data.data,
          total: res.data.total,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_DEVICES_ERROR,
      });
    });
};

export { getPageDevice };
