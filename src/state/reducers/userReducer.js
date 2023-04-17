import { UserBody } from "../../models/userModel"

const reducer = (userBody=new UserBody(),action)=>{
    if(action.type==='loggedIn'){
        userBody=action.payload;
        return userBody;
    }
    return userBody;
}
export default reducer