import axios from 'axios'
import { PENDING_FETCH_FAIL, PENDING_FETCH_SUCCESS } from './Types'

export const pendingCalls = (test) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        }
    };
    try {


        const response = await axios.get('http://localhost:8000/api/drop/', config)
        console.log(response.data)
        dispatch({
            type: PENDING_FETCH_SUCCESS,
            payload: response.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: PENDING_FETCH_FAIL,

        })
        alert('customer Pending data fetch failed')
    }
}


export const pickVehicle = (OdoMeter, customer_tokenId) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        }
    };
    const body = JSON.stringify({ OdoMeter })
    try {


        const response = await axios.post(`http://localhost:8000/api/pickup/${customer_tokenId}/`, body, config)
        console.log(response.data)
        alert('data is posted ')
        dispatch({
            type: PENDING_FETCH_SUCCESS,
            payload: response.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: PENDING_FETCH_FAIL,

        })
        alert('customer Pending data fetch failed')
    }
}



