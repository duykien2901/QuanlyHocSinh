import { getClassroomList } from "./classroom";
import { getCourseList } from "./course";
import { getListTeacher } from "./teacher";
import { getTimetable } from "./timtable"

const filterTimetable = () => dispatch => {
    dispatch(getTimetable());
    dispatch(getListTeacher());
    dispatch(getClassroomList());
    dispatch(getCourseList());
}

export {filterTimetable}