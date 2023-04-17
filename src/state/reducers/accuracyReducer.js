
const reducer = (wrongAttempt = 0, action) => {
    if (action.type === 'wrongAttempt') {
        return wrongAttempt + action.payload
    }
    else if (action.type === 'refreshAccuracy') {
        wrongAttempt = action.payload
        return wrongAttempt
    }

    return wrongAttempt
}
export default reducer