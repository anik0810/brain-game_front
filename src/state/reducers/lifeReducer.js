const reducer = (life = 3, action) => {
    if (action.type === 'deductLife') {
        return life - action.payload
    }
    if (action.type === 'refreshLife') {
        life = action.payload
        return life
    }
    return life
}
export default reducer