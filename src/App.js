import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {handleInitialData} from './actions/shared'
import  LoadingBar  from "react-redux-loading";
import LogIn from './pages/Login/logIn';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/home';
import ProtectedRoute from './ProtectedRoute';

const App =()=>{
  const authedUser=useSelector(({authedUser})=>authedUser)
  const dispatch= useDispatch() 

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <div>
      <LoadingBar style={{ backgroundColor: '#1e88f5', height: '5px' }} />
      <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <LogIn {...props} />}
          />
          <ProtectedRoute authedUser={authedUser} path="/" name="Main" component={Home} />
        </Switch>
        {/* {authedUser===null?<LoadingBar/>:
        <LogIn/>} */}
      </div>
    )

}

export default App