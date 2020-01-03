const initialState= {
    email: '', 
    id: 0
}

const GET_USER = 'GET_USER'; 
const LOGOUT = 'LOGOUT'; 

export function getUser(userobj){
    return{
        type: GET_USER,
        payload: userobj
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER: 
        const{email, id} = action.payload 
        return {...state, email, id}
        default: 
        return state
    }
}