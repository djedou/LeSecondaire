export const firebaseReducer = (firebase, action) => {
    switch(action.type){
        case 'name':
            return firebase;
        default:
            return firebase
    }
};