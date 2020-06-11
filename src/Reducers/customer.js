import { CUSTOMER_FETCH_FAIL, CUSTOMER_FETCH_SUCCESS } from '../Actions/Types'


const initialState = {
    customerData: [],
    isAuthenticated: null,
    loading: false
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case CUSTOMER_FETCH_SUCCESS:


            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                customerData: payload.Assigned
            }
        case CUSTOMER_FETCH_FAIL:
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