export const SaveAuthedUser ='save-authedUser';

const saveAuthedUser=(id)=>{
    return{
        type:SaveAuthedUser,
        id
    }
}
export{saveAuthedUser}