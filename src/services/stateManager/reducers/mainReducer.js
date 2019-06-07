import {firebaseReducer} from "./firebaseReducer";
import {userReducer} from "./userReducer";


export const mainReducer = ({firebase, user}, action) => {

    // put Middleware here
    return {
        firebase: firebaseReducer(firebase, action),
        user: userReducer(user, action)
    }
};