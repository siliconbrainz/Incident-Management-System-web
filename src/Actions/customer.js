import axios from 'axios'
import { CUSTOMER_FETCH_FAIL, CUSTOMER_FETCH_SUCCESS } from './Types'

export const customerDetailsFetch = (test) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        }
    };
    try {


        const response = await axios.get('http://localhost:8000/api/pickup/', config)
        console.log(response.data)
        dispatch({
            type: CUSTOMER_FETCH_SUCCESS,
            payload: response.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: CUSTOMER_FETCH_FAIL,

        })
        alert('customer data fetch failed')
    }
}

export const Test = (params) => dispatch => {
    alert('test function is called')
}
