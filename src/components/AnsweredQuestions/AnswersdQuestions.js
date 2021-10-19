import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'

const AnswersdQuestions = (props) => {
    const questionAuthor=(id) => useSelector(({users})=>{return{avatar:users[id].avatarURL,
        name: users[id].name}})
    const authedUser = useSelector(({authedUser})=>authedUser)
    const answeredQuestions = useSelector(({questions})=>Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp).filter(
        (question) =>
          questions[question].optionOne.votes.includes(authedUser)||
          questions[question].optionTwo.votes.includes(authedUser)
      ).map((Question)=>{
        return{
            id:questions[Question].id,
            author:questions[Question].author,
            optionOne:questions[Question].optionOne.text,
            optionTwo:questions[Question].optionTwo.text,
            key:questions[Question].timestamp
        }
    }))
    return (
        <div>
            {answeredQuestions.map((Question)=>{return(
                <Card key={Question.key} style={{width:'100%' , height: '310px'}}>
                 <div className='content-container'>   
                <Image src={questionAuthor(Question.author).avatar}  alt={Question.id} style={{width:'40%'}} wrapped ui={true} />
                <Card.Content>
                  <Card.Header>{questionAuthor(Question.author).name}</Card.Header>
                  <Card.Meta>
                    <span>Would you rather</span>
                  </Card.Meta>
                  <Card.Description>
                  <p className='answer'>{Question.optionOne}</p>
                   <span className='or'>or</span>
                  <p className='answer'>{Question.optionTwo}</p>
                  </Card.Description>
                </Card.Content>
                </div>
                <Card.Content extra>
                    {/* <button onClick={()=>props.history.push(`/question/:${Question.id}`)}>VIEW QUESTION</button> */}
                    <Link to={`/questions/${Question.id}`} style={{ padding:'6px',height:'40px',color:'white'}}>VIEW QUESTION</Link>
                </Card.Content>
              </Card>)
            })}
            
        </div>
    )
}

export default AnswersdQuestions
