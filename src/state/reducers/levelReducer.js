
const reducer = (level = 1, action) => {
    if (action.type === 'levelup') {
        return level + action.payload
    }
    else if (action.type === 'refreshLevel') {
        level = action.payload
        return level
    }

    return level
}
export default reducer