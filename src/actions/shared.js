import { getInitialData } from "../utils/_DATA";
import { saveAuthedUser } from "./authedUser";
import { saveQuestions } from "./questions";
import { saveUsers } from "./users";
import { showLoading, hideLoading } from 'react-redux-loading';

const userID = 'sarahedo'

const handleInitialData =()=>{
    return async (dispatch)=>{
        dispatch(showLoading())
        const {users,questions} = await getInitialData();
        dispatch(saveUsers(users))
        dispatch(saveQuestions(questions))
        dispatch(saveAuthedUser(userID))
        dispatch(hideLoading())
    }
}
export{handleInitialData}