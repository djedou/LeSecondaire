export const userReducer = (user, action) => {
    switch(action.type){
        case 'name':
            return user;
        default:
            return user
    }
}; 