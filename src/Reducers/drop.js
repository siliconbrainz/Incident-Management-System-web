import { DROP_FETCH_SUCCESS, DROP_FETCH_FAIL, DROP_VEHICLE_SUCCESS } from '../Actions/Types'


const initialState = {
    customerData: [],
    isAuthenticated: null,
    loading: false,
    dropUploaded: false,
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case DROP_FETCH_SUCCESS:


            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                // dropUploaded: false,
                customerData: payload.Completed
            }
        case DROP_VEHICLE_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                dropUploaded: true,
            }
        case DROP_FETCH_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                dropUploaded: false,
            }
        default:
            return {
                ...state
            }
    }
}