import { notification } from "antd";
import apis from "../apis";
import {
  ADD_DEVICES,
  ADD_DEVICES_ERROR,
  ADD_DEVICES_SUCCESS,
  CHANGE_DEVICES,
  CHANGE_DEVICES_ERROR,
  CHANGE_DEVICES_SUCCESS,
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

const getPageDeviceSorting = (page, pageSize, sort) => (dispatch) => {
  dispatch({ type: FETCH_DEVICES });

  apis.devices
    .getPageDeviceSorting(page, pageSize, sort)
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
const addDevice = (value, resolve, reject) => (dispatch) => {
  dispatch({ type: ADD_DEVICES });
  apis.devices
    .addDevice(value)
    .then((res) => {
      dispatch({
        type: ADD_DEVICES_SUCCESS,
      });
      notification.success({
        message: "Successful",
        duration: 1,
      });
      resolve && resolve();
    })
    .catch((err) => {
      dispatch({ type: ADD_DEVICES_ERROR });
      notification.error({
        message: "Devices is exist",
        duration: 1,
      });
      reject && reject();
    });
};

const changeDevice = (value, id, resolve, reject) => (dispatch) => {
  dispatch({ type: CHANGE_DEVICES });
  apis.devices
    .changeDevice(value, id)
    .then((res) => {
      dispatch({
        type: CHANGE_DEVICES_SUCCESS,
      });
      notification.success({
        message: "Successful",
        duration: 1,
      });
      resolve && resolve();
    })
    .catch((err) => {
      dispatch({ type: CHANGE_DEVICES_ERROR });
      notification.error({
        message: "Devices is exist",
        duration: 1,
      });
      reject && reject();
    });
};
export { getPageDevice, addDevice, getPageDeviceSorting, changeDevice };
