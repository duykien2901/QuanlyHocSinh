import axios from "axios";
import timetable from "./timtable";
import teacher from "./teacher";
import classroom from "./classroom";
import course from "./course";
import auth from "./login";
import devices from "./device";

let token = localStorage.getItem("token");
export const configHeader = {
  headers: { Authorization: "Bearer " + token },
};
// export default {
//   login: (data) => {
//     return axios.post("/api/login", data);
//   },

//   getTimetable: (page, pageSize) => {
//     return axios.get(
//       `/api/timetable/page?page=${page - 1}&pageSize=${pageSize}`,
//       configHeader
//     );
//   },

//   searchTimetable: (page, pageSize, value) => {
//     return axios.get(
//       `/api/timetable/search?page=${
//         page - 1
//       }&pageSize=${pageSize}&value=${value}`,
//       configHeader
//     );
//   },

//   searchTimetableDetails: (page, pageSize, value) => {
//     console.log(value);
//     return axios.post(
//       `/api/timetable/search/details?page=${page - 1}&pageSize=${pageSize}`,
//       value,
//       configHeader
//     );
//   },

//   getTeacherList: () => {
//     return axios.get("/api/teacher/all", configHeader);
//   },

//   getClassroomList: () => {
//     return axios.get("/api/classroom/all", configHeader);
//   },

//   getCourseList: () => {
//     return axios.get("/api/course/all", configHeader);
//   },

//   addTimetable: (data) => {
//     return axios.post("/api/timetable/new", data, configHeader);
//   },

//   changeTimetable: (id, data) => {
//     return axios.put(`/api/timetable/change/${id}`, data, configHeader);
//   },

//   deleteTimetable: (id) => {
//     return axios.delete(`/api/timetable/delete/${id}`, configHeader);
//   },
// };

export default {
  timetable,
  teacher,
  classroom,
  course,
  auth,
  devices,
};
