const initialState = {
        user_id: null,
        username: '',
        pic: ''
}

const GET_USER = 'GET_USER';

export function getUser(user_id, username, pic){
    return {
        type: GET_USER,
        payload: {user_id, username, pic}
    }
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER:
            return {...state, user: action.payload};
        default:
            return state;
    }
}