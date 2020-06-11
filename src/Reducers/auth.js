import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../Actions/Types'


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: false
}



export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            console.log(localStorage.getItem('token'))
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload.token
            }
        case LOGOUT:
            localStorage.removeItem('token');
            console.log(localStorage.getItem('token'))
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
            }
        default:
            return {
                ...state
            }
    }
}