import React from 'react'
import { useSelector } from 'react-redux';
import './avatar.css'

const Avatar = () => {
    const user=useSelector(({authedUser,users})=>users[authedUser])
    const userAvatar = user.avatarURL
    return (
        <div className='avatar-container'>
        <img className='avatar' src={userAvatar} alt={userAvatar.name}/>
        <p>{user.name}</p>

        </div>
    )
}

export default Avatar
