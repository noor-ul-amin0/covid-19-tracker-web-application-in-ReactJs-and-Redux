import { combineReducers } from "redux";
import countryCase from "../redux/countary-wise-case/countaryCase-reducers";
import globalCases from "./global-cases/globalCases-reducers";
const rootReducer = combineReducers({
  globalCases: globalCases,
  countryCase: countryCase,
});
export default rootReducer;
