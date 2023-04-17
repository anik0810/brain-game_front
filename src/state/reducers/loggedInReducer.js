const reducer = (loggedIn=false,action)=>{
    if(action.type==='loggedIn'){
        loggedIn=action.payload
        return loggedIn
    }
    return loggedIn
}
export default reducer