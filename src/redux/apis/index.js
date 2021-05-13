import axios from "axios";

let token = localStorage.getItem("token");
const configHeader = {
  headers: { Authorization: "Bearer " + token }
}
export default {
  login: (data) => {
    return axios.post("/api/login", data);
  },

  getTimetable: () => {
    return axios.get("/api/timetable/all", configHeader);
  },

  getTeacherList: () => {
    return axios.get("/api/teacher/all", configHeader);
  },

  getClassroomList: () => {
    return axios.get("/api/classroom/all",configHeader);
  },

  getCourseList: () => {
    return axios.get("/api/course/all",configHeader);
  },

  deleteTimetable: (id) => {
    return axios.delete(`/api/timetable/delete/${id}`, configHeader);
  }
};
