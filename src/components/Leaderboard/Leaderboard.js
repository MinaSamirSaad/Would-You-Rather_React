import React from 'react'
import { useSelector } from 'react-redux';
import ScoreCard from '../scoreCard/scoreCard';

const Leaderboard = () => {
    	const users = useSelector(({users})=>Object.keys(users).sort((A, B) => {
            const scoreSmallNumbers = Object.keys(users[A].answers).length + users[A].questions.length;
            const scoreBigNumbers = Object.keys(users[B].answers).length + users[B].questions.length;
            return scoreBigNumbers - scoreSmallNumbers;
        }).map((user)=>users[user])) 
        console.log(users)
    return (
        <div>
            {Object.values(users).map((user)=>(<ScoreCard key={user.id} {...user}/>))}
        </div>
    )
}

export default Leaderboard
