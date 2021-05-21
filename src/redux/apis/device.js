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
};
