import axios from "axios";

let token = localStorage.getItem("token");

const configHeader = {
  headers: { Authorization: "Bearer " + token },
};

export default {
  getCourseList: () => {
    return axios.get("/api/course/all", configHeader);
  },
};
