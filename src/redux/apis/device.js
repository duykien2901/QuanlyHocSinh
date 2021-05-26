import axios from "axios";

let token = localStorage.getItem("token");

const configHeader = {
  headers: { Authorization: "Bearer " + token },
};

export default {
  getPageDevice: (page, pageSize) => {
    return axios.get(
      `/api/device/page?page=${page - 1}&pageSize=${pageSize}`,
      configHeader
    );
  },
  getPageDeviceSorting: (page, pageSize, sort) => {
    return axios.get(
      `/api/device/pageSort?page=${page - 1}&pageSize=${pageSize}&sort=${sort}`,
      configHeader
    );
  },

  addDevice: (value) => {
    return axios.post("/api/device/add", value, configHeader);
  },

  changeDevice: (value, id) => {
    return axios.put(`/api/device/${id}`, value, configHeader);
  },

  deleteDevice: (id) => {
    return axios.delete(`/api/device/${id}`, configHeader);
  },
};
