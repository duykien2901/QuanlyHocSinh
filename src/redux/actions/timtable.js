import { notification } from "antd";
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
  apis.timetable
    .getTimetable(page, pageSize)
    .then((res) => {
      dispatch({
        type: FETCH_TIMETABLES_SUCCESS,
        payload: {
          data: res.data.data,
          total: res.data.total,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TIMETABLES_ERROR,
      });
    });
};

const addTimetable = (data) => {
  apis.timetable
    .addTimetable(data)
    .then((res) => {
      notification.success({
        message: "Successfully",
        duration: 1,
      });
    })
    .catch((err) => {
      notification.error({
        message: "Timetable is exist",
        duration: 1,
      });
    });
};

const deleteTimetable = (id, page, pageSize, value) => (dispatch) => {
  apis.timetable
    .deleteTimetable(id)
    .then((res) => {
      dispatch(searchTimetableDetails(page, pageSize, value));
    })
    .catch((err) => {
      dispatch({
        type: DELETE_TIMETABLES_ERROR,
        payload: "Delete failed",
      });
    });
};

const changeTimetable = (id, data) => {
  apis.timetable
    .changeTimetable(id, data)
    .then((res) => {
      notification.success({
        message: "Successfully",
        duration: 1,
      });
    })
    .catch((err) => {
      notification.error({
        message: "Timetable is exist",
        duration: 1,
      });
    });
};

const searchTimetable = (page, pageSize, value) => (dispatch) => {
  dispatch({ type: FETCH_TIMETABLES });
  apis.timetable
    .searchTimetable(page, pageSize, value)
    .then((res) => {
      dispatch({
        type: FETCH_TIMETABLES_SUCCESS,
        payload: {
          data: res.data.data,
          total: res.data.total,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TIMETABLES_ERROR,
      });
    });
};

const searchTimetableDetails = (page, pageSize, value) => (dispatch) => {
  dispatch({ type: FETCH_TIMETABLES });
  apis.timetable
    .searchTimetableDetails(page, pageSize, value)
    .then((res) => {
      dispatch({
        type: FETCH_TIMETABLES_SUCCESS,
        payload: {
          data: res.data.data,
          total: res.data.total,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TIMETABLES_ERROR,
      });
    });
};
export {
  getTimetable,
  deleteTimetable,
  addTimetable,
  changeTimetable,
  searchTimetable,
  searchTimetableDetails,
};
