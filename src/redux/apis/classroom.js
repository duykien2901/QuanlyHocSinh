import axios from "axios";

let token = localStorage.getItem("token");

const configHeader = {
  headers: { Authorization: "Bearer " + token },
};

export default {
  getClassroomList: () => {
    return axios.get("/api/classroom/all", configHeader);
  },
};
