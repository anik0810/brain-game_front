
const reducer = (time = 0, action) => {
    if (action.type === 'increaseTime') {
        return time + action.payload
    }
    else if (action.type === 'refreshTime') {
        time = action.payload
        return time
    }
    else return time
}

export default reducer