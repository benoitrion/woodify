import {combineReducers} from "redux";
import Settings from "./Settings";


const reducers = combineReducers({
  settings: Settings,
});

export default reducers;
