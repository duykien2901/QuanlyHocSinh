import {combineReducers} from "redux"

import authReducer from "./auth"
import timetablesReducer from "./timetables";

let reducersAll = combineReducers({
    auth: authReducer,
    timetables: timetablesReducer
});

export default reducersAll;
