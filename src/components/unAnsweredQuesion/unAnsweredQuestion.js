import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Radio } from 'semantic-ui-react'
import { handleSaveQuestionAnswer } from "../../actions/questions";
import './unAnsweredQuestion.css'
const UnAnsweredQuestion = (props) => {
const dispatch =useDispatch();
const { author, avatar, optionOne, optionTwo,QuestionID,authedUser }=props;
const [Answer, setanswer] = useState();
const handleChose = (e,value) => {
      setanswer(value.value)
   
  };
  const saveAnswer=(e)=>{
      e.preventDefault()
    const qid =QuestionID
    Answer?dispatch(handleSaveQuestionAnswer(authedUser,qid,Answer)):alert('please chose answer')
    
  }
  console.log(Answer);
  return (
    <div className="answeredQuestion-container">
      <div className="avatar-photo" style={{width:'30%'}}>
        <img src={avatar} alt={author} />
        <p className="author-name">{author}</p>
      </div>
      <Form className='form'>
        <h3>Would you rather</h3>
      <Form.Field>
        <Radio
          label={optionOne}
          value="optionOne"
          name='radioGroup'
          checked={Answer === 'optionOne'}
          onChange={handleChose}
        />
        </Form.Field>
        <Form.Field>
        <Radio
          label={optionTwo}
          value="optionTwo"  
          name='radioGroup'
          checked={Answer ==='optionTwo'}
          onChange={handleChose}
        />
        </Form.Field>
        <Button onClick={saveAnswer}>SUBMIT</Button>
        </Form>
    </div>
  );
};

export default UnAnsweredQuestion;
