import React, { Component, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'


class index extends Component {

    render() {
        const { logout } = this.props
        return (
            <Fragment>
                <ul>
                    <li>
                        <NavLink exact to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/profile'>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/logout'>Logout</NavLink>
                    </li>
                </ul>
            </Fragment>
        )
    }
}

export default index;
