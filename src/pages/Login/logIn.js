import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'
import { saveAuthedUser } from '../../actions/authedUser';
import './login.css'


const LogIn = (props) => {
  const dispatch = useDispatch();
  const [authedUser,setauthUser]=useState('')
    const users = useSelector(({users})=>{return Object.keys(users).map((user)=>{
        return{
            key: users[user].id,
            text: users[user].name,
            value: users[user].id,
            image: { avatar: true, src: users[user].avatarURL }
        }
    })})
    const usersArray = Object.values(users)
    console.log (usersArray)

    const handleSubmit =(event)=>{
      event.preventDefault()
      authedUser?dispatch(saveAuthedUser(authedUser))&&props.history.push('/'):alert('you should select user')
    }
    const handleChange = (event,data) => {
      console.log(data.value)
      setauthUser(data.value);
    };
    console.log(authedUser)


   
    return (
      <div className='container'>
        <form onSubmit={handleSubmit} className='Login'>
          <Dropdown
          onChange={handleChange}
          className='Dropdown'
          placeholder=' Select User'
          fluid
          selection
          options={usersArray}/>
        <input className='submit-button' type="submit" value="LogIn" />
      </form>
      </div>
    )
}

export default LogIn
