import React from 'react'
import { Tab } from 'semantic-ui-react'
import AnswersdQuestions from './../AnsweredQuestions/AnswersdQuestions';
import UnAnsweredQuistions from './../unAnsweredQuestions/unAnsweredQuestions';
import'./Dashboard.css'
import { useSelector } from 'react-redux';


const Dashboard = (props) => {
    const authedUser= useSelector(({authedUser})=>authedUser)
    const unAnswersdQuistionsNumbers = useSelector(({questions})=>Object.keys(questions).filter((Question)=>
        !questions[Question].optionOne.votes.includes(authedUser)&& 
        !questions[Question].optionTwo.votes.includes(authedUser)
    ).length)
    const answeredQuestionsNumbers = useSelector(({questions})=>Object.keys(questions).filter(
        (question) =>
          questions[question].optionOne.votes.includes(authedUser)||
          questions[question].optionTwo.votes.includes(authedUser)).length)
    const panes = [
        { menuItem: `${unAnswersdQuistionsNumbers} UNANSWERED QUESTION`, render: () => <Tab.Pane><UnAnsweredQuistions/></Tab.Pane> },
        { menuItem: `${answeredQuestionsNumbers} ANSWERED QUESTIONS`, render: () => <Tab.Pane><AnswersdQuestions /></Tab.Pane> },
    ]
    return (
        <div className='tab-container'>
            <Tab className='tab' panes={panes}  />
        </div>
    )
}

export default Dashboard
