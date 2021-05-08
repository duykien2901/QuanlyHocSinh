import axios from "axios"

let token = localStorage.getItem("token");
export default {
    login: (data) => {
        return axios.post("/api/login", data);
    },

    getTimetable: () => {
        return axios.get("/api/timetable/all", {headers: {Authorization: "Bearer " + token}});
    }
}