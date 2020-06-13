import { PENDING_FETCH_FAIL, PENDING_FETCH_SUCCESS, PICK_VEHICLE_SUCCESS, PICK_VEHICLE_FAIL } from '../Actions/Types'


const initialState = {
    customerData: [],
    isAuthenticated: null,
    pickUpCompleted: false,
    loading: false,
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
        case PICK_VEHICLE_SUCCESS:


            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                pickUpCompleted: true,
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