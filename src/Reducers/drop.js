import { DROP_FETCH_SUCCESS, DROP_FETCH_FAIL } from '../Actions/Types'


const initialState = {
    customerData: [],
    isAuthenticated: null,
    loading: false
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case DROP_FETCH_SUCCESS:


            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                customerData: payload.Completed
            }
        case DROP_FETCH_FAIL:
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