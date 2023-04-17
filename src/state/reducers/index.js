import { combineReducers } from "redux";
import pointReducer from "./pointReducer";
import levelReducer from "./levelReducer";
import userReducer from "./userReducer";
import loggedInReducer from "./loggedInReducer";
import lifeReducer from "./lifeReducer";
import wrongAttemptReducer from "./wrongAttemptReducer";
import timeReducer from "./timeReducer";
import accuracyReducer from "./accuracyReducer";

const reducers=combineReducers({
    point:pointReducer,
    level:levelReducer,
    userState:userReducer,
    loggedIn:loggedInReducer,
    life:lifeReducer,
    wrongAttempt:wrongAttemptReducer,
    time:timeReducer,
    accuracy:accuracyReducer
    
})

export default reducers