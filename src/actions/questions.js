import { showLoading, hideLoading } from 'react-redux-loading'
import { userAnswerQuestion } from './users';
import { _saveQuestionAnswer } from './../utils/_DATA';
import { _saveQuestion } from './../utils/_DATA';
import { userAddQuestion } from './users';
export const SaveQuestions ='save-Questions';
export const AnsweringQuestion ='save-answer-question'
export const AddQuestion='add-question'

const saveQuestions=(questions)=>{
    return{
        type:SaveQuestions,
        questions
    }
}
export{saveQuestions}


const answerQuestion=({ authedUser, qid, answer })=>{
    return {
      type: AnsweringQuestion,
      payload: { authedUser, qid, answer },
    }
  }
export{answerQuestion}

const addQuestion=(question)=>{
  return {
    type:AddQuestion ,
    payload: { question },
  }
}
export{addQuestion}

const handleSaveQuestionAnswer =( authedUser, qid, answer )=>{
    return async(dispatch) => {
      dispatch(showLoading())
      return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
        dispatch(userAnswerQuestion({ authedUser, qid, answer }))
        dispatch(answerQuestion({ authedUser, qid, answer }))
        dispatch(hideLoading())
      })
    }
  }
  export{handleSaveQuestionAnswer}

const handleAddQuestion=(optionOneText, optionTwoText, author)=>{
  return async (dispatch) => {
    dispatch(showLoading())
    const question_1 = await _saveQuestion({ optionOneText, optionTwoText, author });
    dispatch(userAddQuestion(question_1));
    dispatch(addQuestion(question_1));
    dispatch(hideLoading());
  }
}  
export {handleAddQuestion}