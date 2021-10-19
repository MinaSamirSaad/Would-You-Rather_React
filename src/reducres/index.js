import { combineReducers } from "redux";
import users from './users.reducres';
import questions from "./questions.reducres";
import authedUser from "./authedUsers.reducer";
import { loadingBarReducer } from "react-redux-loading";


const reducer =combineReducers({
    users,
    questions,
    authedUser,
    loadingBar:loadingBarReducer
})

export default reducer
