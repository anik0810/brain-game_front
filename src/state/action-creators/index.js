export const increaseTime = (time) => {
    return (dispatch) => {
        dispatch({
            type: 'increaseTime',
            payload: time
        })
    }
}
export const refreshTime = (time) => {
    return (dispatch) => {
        dispatch({
            type: 'refreshTime',
            payload: time
        })
    }
}
export const addPoint = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'addScore',
            payload: amount
        })
    }
}
export const deductPoint = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deductScore',
            payload: amount
        })
    }
}
export const refreshPoint = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'refreshScore',
            payload: amount
        })
    }
}

export const deductLife = (life) => {
    return (dispatch) => {
        dispatch({
            type: 'deductLife',
            payload: life
        })
    }
}

export const refreshLife = (life) => {
    return (dispatch) => {
        dispatch({
            type: 'refreshLife',
            payload: life
        })
    }
}


export const levelup = (level) => {
    return (dispatch) => {
        dispatch({
            type: 'levelup',
            payload: level
        })
    }
}

export const refreshLevel = (level) => {
    return (dispatch) => {
        dispatch({
            type: 'refreshLevel',
            payload: level
        })
    }
}

export const wrongAttempt = (attempt) => {
    return (dispatch) => {
        dispatch({
            type: 'wrongAttempt',
            payload: attempt
        })
    }
}


export const refreshWrongAttempt = () => {
    return (dispatch) => {
        dispatch({
            type: 'newLevel',
            payload: 0
        })
    }
}

export const refreshAccuracy = () => {
    return (dispatch) => {
        dispatch({
            type: 'refreshAccuracy',
            payload: 0
        })
    }
}

export const loggedIn = (loggedIn) => {
    return (dispatch) => {
        dispatch({
            type: 'loggedIn',
            payload: loggedIn
        })
    }
}
export const userState = (userBody) => {
    return (dispatch) => {
        dispatch({
            type: 'loggedIn',
            payload: userBody
        })
    }
}