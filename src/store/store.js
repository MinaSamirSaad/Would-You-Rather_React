import { createStore } from "redux";
import reducer from "../reducres";
import middleware from "../middleware";
const store = createStore(reducer,middleware)
export default store