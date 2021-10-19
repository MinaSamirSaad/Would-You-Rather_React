import React from 'react'
import'./scoreCard.css'

const ScoreCard = (props) => {
    console.log(props)
    const AnswersdQuestionsNumber=Object.keys(props.answers).length;
    const AddQuestionsNumber = props.questions.length;
    const total= AnswersdQuestionsNumber + AddQuestionsNumber;
    return (
        <div className='scorCard-container'>
           <div className='avatar-photo' >
                <img src={props.avatarURL} alt={props.name} />
                <p className='author-name'>{props.name}</p>
            </div>
            <div className='control-container'>
            <p className='questions-numbers' style={{color:'black'}}>Answered questions: {AnswersdQuestionsNumber}</p>
            <p className='questions-numbers'>Created questions: {AddQuestionsNumber}</p>
            <span className='total'> TOTAL IS: {total} </span>
            </div>
        </div>
    )
}

export default ScoreCard
