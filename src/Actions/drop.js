import axios from 'axios'
import { DROP_FETCH_FAIL, DROP_FETCH_SUCCESS, DROP_VEHICLE_SUCCESS, DROP_VEHICLE_FAIL } from './Types'

export const dropCalls = (test) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        }
    };
    try {


        const response = await axios.get('http://localhost:8000/api/complete/', config)
        console.log(response.data)
        dispatch({
            type: DROP_FETCH_SUCCESS,
            payload: response.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: DROP_FETCH_FAIL,

        })
        alert('customer Drop completed data fetch failed')
    }
}


export const dropVehicle = (remarks, customer_tokenId) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        }
    };
    const body = JSON.stringify({ remarks })
    try {


        const response = await axios.post(`http://localhost:8000/api/drop/${customer_tokenId}/`, body, config)
        console.log(response.data)
        dispatch({
            type: DROP_VEHICLE_SUCCESS,
            payload: response.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: DROP_VEHICLE_FAIL,

        })
        alert('customer drop vehicle is failed')
    }
}
