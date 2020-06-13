import axios from 'axios'
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './Types'

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ username, password });

    try {
        const res = await axios.post('http://localhost:8000/api/auth/login', body, config);
        console.log(res)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })


    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,

        })
    }
};

export const logout = () => async dispatch => {
    console.log('inside the logout action ', localStorage.getItem('token'))
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token 8d8c1609f39f5f2b4928df8d5371274c541ed0fce0aba7d0071eb0415f99e892'
            // `token ${localStorage.getItem('token')}`
        }
    };

    const body = JSON.stringify({});

    try {
        const res = await axios.post('http://localhost:8000/api/auth/logout/', config);
        console.log('logout is called ')
        dispatch({
            type: LOGOUT,
        })


    } catch (err) {
        dispatch({
            type: LOGOUT,

        })
    }
};
