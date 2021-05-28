import { combineReducers } from "redux";
import accountReducer from "./account";

import authReducer from "./auth";
import classReducer from "./classroom";
import courseReducer from "./course";
import devicesReducer from "./device";
import teacherReducer from "./teacher";
import timetablesReducer from "./timetables";

let reducersAll = combineReducers({
  auth: authReducer,
  timetables: timetablesReducer,
  teachers: teacherReducer,
  classes: classReducer,
  courses: courseReducer,
  devices: devicesReducer,
  accounts: accountReducer,
});

export default reducersAll;
