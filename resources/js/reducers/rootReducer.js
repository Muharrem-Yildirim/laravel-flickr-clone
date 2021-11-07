import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import exploreReducer from "./exploreReducer";
import authReducer from "./authReducer";

export default combineReducers({ modalReducer, exploreReducer, authReducer });
