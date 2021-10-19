import React from 'react'
import { useSelector } from 'react-redux';
import './answeredQuestion.css'

const AnsweredQuestion = (props) => {
    const {author,avatar,optionOne,optionTwo,optionOneLength,optionTwoLength,Question}=props
    const authedUser = useSelector(({authedUser})=>authedUser)
    const totalVotes=optionOneLength+optionTwoLength;
    const optionOnepercent =Math.round((optionOneLength/totalVotes)*100);
    const optionTwopercent = Math.round((optionTwoLength/totalVotes)*100);

    return (
        <div className='answeredQuestion-container'>
            <div className='avatar-photo' >
                <img src={avatar} alt={author} />
                <p className='author-name'>{author}</p>
            </div>
            <div className='answeredQuestion-content'>
                <h3>Would you rather</h3>
                <div className='optionOne-container'>
                        <div >{Question.optionOne.votes.includes(authedUser)?
                        <span className='yourVote'>your vote is :<span className='optionOne'>{optionOne}</span></span>:<span className='optionOne'>{optionOne}</span>} <span className='votes'>{optionOneLength} vote</span></div> 
                        
                     <div className="w3-border">
                        <div className="w3-blue" style={{width:`${optionOnepercent}%`,height:'24px'}}>{optionOnepercent}%</div>
                    </div> 
                </div> 
                <div className='optionTwo-container'>
                        <div >{Question.optionTwo.votes.includes(authedUser)?
                        <span className='yourVote'>your vote is :<span className='optionTwo'>{optionTwo}</span></span>:<span className='optionTwo'>{optionTwo}</span>} <span className='votes'>{optionTwoLength} vote</span></div> 
                        
                     <div className="w3-border">
                        <div className="w3-blue" style={{width:`${optionTwopercent}%`,height:'24px'}}>{optionTwopercent}%</div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default AnsweredQuestion
