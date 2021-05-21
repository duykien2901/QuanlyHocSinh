import axios from "axios";

let token = localStorage.getItem("token");

const configHeader = {
  headers: { Authorization: "Bearer " + token },
};

export default {
  login: (data) => {
    return axios.post("/api/login", data);
  },
};
