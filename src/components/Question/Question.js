import React from 'react'
import { useSelector } from 'react-redux';
import AnsweredQuestion from '../answeredQuestion/answeredQuestion';
import UnAnsweredQuestion from '../unAnsweredQuesion/unAnsweredQuestion';

const Question = (props) => {
    const questionAuthor=(id) => useSelector(({users})=>{return{avatar:users[id].avatarURL,
        name: users[id].name}})
    const authedUser = useSelector(({authedUser})=>authedUser)
    const questionID=props.match.params.question_id;
    const Question = useSelector(({questions})=>questions[questionID])
    console.log('question',Question)
    const questionType=(Question.optionOne.votes.includes(authedUser)||Question.optionTwo.votes.includes(authedUser))?
    true:false;
    return (
        <div>
            {questionType?
            <AnsweredQuestion 
            author={questionAuthor(Question.author).name}
            avatar={questionAuthor(Question.author).avatar}
            optionOne={Question.optionOne.text}
            optionTwo={Question.optionTwo.text}
            optionOneLength={Question.optionOne.votes.length}
            optionTwoLength={Question.optionTwo.votes.length}
            Question={Question}/>:
            <UnAnsweredQuestion
            author={questionAuthor(Question.author).name}
            avatar={questionAuthor(Question.author).avatar}
            optionOne={Question.optionOne.text}
            optionTwo={Question.optionTwo.text}
            QuestionID={questionID}
            authedUser={authedUser}
            Question={Question}/>
            }
        </div>
    )
}

export default Question
