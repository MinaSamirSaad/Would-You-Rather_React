export const SaveUsers ='save-users';
export const UseerSaveAnswerQuestion='user-answer-question';
export const userADDQuestion='user-add-question';


const saveUsers=(users)=>{
    return{
        type:SaveUsers,
        users
    }
}
export{saveUsers}

const userAnswerQuestion =({ authedUser, qid, answer })=>{
    return { type: UseerSaveAnswerQuestion, payload: { answer, qid, authedUser } }
}
export{userAnswerQuestion}

const userAddQuestion=(question)=> {
    return { type: userADDQuestion, payload: { question} }
}
export {userAddQuestion}