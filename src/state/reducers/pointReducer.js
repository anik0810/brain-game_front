
const reducer = (score=0,action)=>{
    if(action.type==='addScore'){
        return score+action.payload
    }
    else if(action.type==='deductScore'){
        return score-action.payload
    }
    else if(action.type==='refreshScore'){
        score=action.payload
        return score
    }
    else return score
}

export default reducer