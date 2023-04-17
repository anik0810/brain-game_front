const reducer = (attempt=0,action)=>{
    if(action.type==='wrongAttempt'){
        return attempt+action.payload
    }
    else if(action.type==='newLevel'){
        attempt=0
        return attempt
    }
    return attempt
}
export default reducer