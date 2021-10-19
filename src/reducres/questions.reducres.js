import { SaveQuestions } from "../actions/questions";
import { AnsweringQuestion } from "../actions/questions";
import { AddQuestion } from "../actions/questions";

const questions =(state ={},action)=>{
    switch(action.type){
        case SaveQuestions :
            return{
                ...state,
                ...action.questions
            }
        case AnsweringQuestion:
            return{
                    ...state,
                    [action.payload.qid]: {
                      ...state[action.payload.qid],
                      [action.payload.answer]: {
                        ...state[action.payload.qid][action.payload.answer],
                        votes: [...state[action.payload.qid][action.payload.answer].votes, action.payload.authedUser],
                      },
                    },
            }
        case AddQuestion:
            return{
                ...state,
                [action.payload.question.id]: action.payload.question,
                    }
        default: 
        return state
    }
}
export default questions