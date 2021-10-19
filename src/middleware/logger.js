const logger = (store)=>(next)=>(action)=>{
    console.group(action.type)
    console.log('action is:',action)
    const returnValue = next(action)
    console.log('the new state is:',store.getState())
    console.groupEnd(action.type)
    return returnValue
    }
    export default logger