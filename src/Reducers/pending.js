import { PENDING_FETCH_FAIL, PENDING_FETCH_SUCCESS } from '../Actions/Types'


const initialState = {
    customerData: [],
    isAuthenticated: null,
    loading: false
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case PENDING_FETCH_SUCCESS:


            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                customerData: payload.Picked
            }
        case PENDING_FETCH_FAIL:
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