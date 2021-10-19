import React ,{useState}from 'react'
import './NewQuestion.css'
import { useDispatch, useSelector } from 'react-redux';
import { handleAddQuestion } from '../../actions/questions';
import { Button} from 'semantic-ui-react'


const NewQuestion = (props) => {
    const dispatch = useDispatch();
    const authedUser =useSelector(({authedUser})=>authedUser)
   const[optionOne,setoptionOne]=useState('')
   const[optionTwo,setoptionTwo]=useState('')
    const handleSubmit=(e)=>{
       
        e.preventDefault();
        const optionOneText =optionOne;
        const optionTwoText = optionTwo;
        const author=authedUser;
         optionOne&&optionTwo?dispatch(handleAddQuestion(optionOneText,optionTwoText,author)
         )&&setTimeout(()=>{props.history.push('/')},1000):alert("please write two options")
        

    }
   console.log(optionOne,optionTwo)
   console.log (authedUser)
   
    return (
        <div className='newQuestionContainer'>
            <form >
            <div >
                <h1>Create New Question</h1>
                <strong>Would you rather</strong>
                </div>
            <div className="group">
            <input  className="form-input"  onChange={(e)=>setoptionOne(e.target.value)} name='optionOne'/>
            <label  className={'form-input-label'}>
                Option One
            </label>
            </div>
            <div className="group" >
                <input className="form-input"  onChange={(e)=>setoptionTwo(e.target.value)} name='optionTwo'/>
                <label  className={'form-input-label'}>
                Option Two
                </label>
            </div>
            <Button  onClick={handleSubmit}>SUBMIT</Button>
            </form>
        </div>
    )
}

export default NewQuestion
