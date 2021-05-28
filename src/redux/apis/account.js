import axios from "axios";
const token = localStorage.getItem("token");
const configHeader = {
  headers: { Authorization: "Bearer " + token },
};

export default {
  getAccountUser: (page, pageSize) => {
    return axios.get(
      `/api/admin/account?page=${page - 1}&pageSize=${pageSize}`,
      configHeader
    );
  },

  deleteAccount: (id) => {
    return axios.delete(`/api/admin/account/${id}`, configHeader);
  },
};
