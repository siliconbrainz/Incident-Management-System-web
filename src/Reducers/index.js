import { combineReducers } from 'redux'
import auth from './auth'
import customer from './customer'
import pending from './pending'
import drop from './drop'

export default combineReducers(
    {
        auth,
        customer,
        pending,
        drop,
    }
)