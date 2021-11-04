import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import exploreReducer from "./exploreReducer";

export default combineReducers({ modalReducer, exploreReducer });
