import React from 'react'
import Header from './../../components/header/header';
import { Switch, Route,Redirect } from 'react-router-dom'
import Dashboard from '../../components/Dashboard/Dashboard';
import NewQuestion from '../../components/NewQuestion/NewQuestion';
import Question from '../../components/Question/Question';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import ErrorPage from './../ErrorPages/ErrorPage';
const Home = () => {
    return (
        <div>
            <Header/>
            <Switch>
            <Route path="/" exact name="Dashboard" component={Dashboard} />
            <Route path="/add" name="New Question" component={NewQuestion} />
            <Route path="/questions/:question_id" component={Question} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/404" component={ErrorPage} />
            <Redirect to="/404" />
            </Switch>
        </div>
    )
}

export default Home
