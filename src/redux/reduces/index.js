import {combineReducers} from "redux"

import authReducer from "./auth"
import classReducer from "./classroom";
import courseReducer from "./course";
import teacherReducer from "./teacher";
import timetablesReducer from "./timetables";

let reducersAll = combineReducers({
    auth: authReducer,
    timetables: timetablesReducer,
    teachers: teacherReducer,
    classes: classReducer,
    courses: courseReducer
});

export default reducersAll;
