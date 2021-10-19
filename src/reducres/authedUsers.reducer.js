import { SaveAuthedUser } from "../actions/authedUser";

const authedUser =(state =null,action)=>{
    switch (action.type) {
        case SaveAuthedUser :
          return action.id
        default :
          return state
      }
}
    
export default authedUser