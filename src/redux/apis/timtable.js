import axios from "axios";

let token = localStorage.getItem("token");
const configHeader = {
  headers: { Authorization: "Bearer " + token },
};

export default {
  getTimetable: (page, pageSize) => {
    return axios.get(
      `/api/timetable/page?page=${page - 1}&pageSize=${pageSize}`,
      configHeader
    );
  },

  searchTimetable: (page, pageSize, value) => {
    return axios.get(
      `/api/timetable/search?page=${
        page - 1
      }&pageSize=${pageSize}&value=${value}`,
      configHeader
    );
  },

  searchTimetableDetails: (page, pageSize, value) => {
    console.log(value);
    return axios.post(
      `/api/timetable/search/details?page=${page - 1}&pageSize=${pageSize}`,
      value,
      configHeader
    );
  },

	addTimetable: (data) => {
    return axios.post("/api/timetable/new", data, configHeader);
  },

  changeTimetable: (id, data) => {
    return axios.put(`/api/timetable/change/${id}`, data, configHeader);
  },

  deleteTimetable: (id) => {
    return axios.delete(`/api/timetable/delete/${id}`, configHeader);
  },
}