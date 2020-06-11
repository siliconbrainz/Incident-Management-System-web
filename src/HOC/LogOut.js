import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { logout } from '../Actions/auth'
class LogOut extends Component {

    componentDidMount() {
        console.log('inside the logout component did mount')
        logout()
    }
    render() {
        return (
            <Link to='/login'>
                LogOut
            </Link>
        )
    }
}

export default LogOut
