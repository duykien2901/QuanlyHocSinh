import axios from "axios";

let token = localStorage.getItem("token");
const configHeader = {
  headers: { Authorization: "Bearer " + token },
};

export default {
  getTeacherList: () => {
    return axios.get("/api/teacher/all", configHeader);
  },
};
