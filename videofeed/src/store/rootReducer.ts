import {combineReducers} from "redux";
import videos from "./videos/reducers";

const rootReducer = combineReducers({
  videos
});
export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
