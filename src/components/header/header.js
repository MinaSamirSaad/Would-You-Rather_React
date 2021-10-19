import React from 'react'
import Avatar from '../avatar/avatar'
import { Link } from 'react-router-dom'
import "./header.css"
const Header = () => {
    return (
        <div className='header-container'>
        <Link to='/' className='avatar-container'>
            <Avatar/>
        </Link>
        <div className='options'>
            <Link className='option' to='/'>Dashboard</Link>
            <Link className='option' to='/add'>New Question</Link>
            <Link className='option' to='/leaderboard'>Leader-Board</Link>
            <Link className='option' to='/login'>Logout</Link>
        </div>
        </div>
    )
}

export default Header
