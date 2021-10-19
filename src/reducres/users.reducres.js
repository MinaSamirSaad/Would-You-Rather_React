import { SaveUsers } from './../actions/users';
import { UseerSaveAnswerQuestion } from './../actions/users';
import { userADDQuestion } from './../actions/users';

const users =(state ={},action)=>{
    switch(action.type){
        case SaveUsers :
            return{
                ...state,
                ...action.users
            }
        case UseerSaveAnswerQuestion:
            return{
                ...state,
                [action.payload.authedUser]: {
                    ...state[action.payload.authedUser],
                    answers: {
                      ...state[action.payload.authedUser].answers,
                      [action.payload.qid]: action.payload.answer,
                    },
                },
            }
        case userADDQuestion:
            return{
                ...state,
                [action.payload.question.author]:{
                ...state[action.payload.question.author],
                questions:[...state[action.payload.question.author].questions,action.payload.question.id],
                },
                
            }
        default: 
        return state
    }
}
export default users