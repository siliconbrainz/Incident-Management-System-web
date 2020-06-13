import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../Actions/auth'
import { useEffect } from 'react'
import { login } from '../Actions/auth'

const LogOut = (props) => {
    const { isAuthenticated, logout } = props
    useEffect(() => {
        logout()
    }, [])
    if (!isAuthenticated)
        return <Redirect to='/login' />
    return (
        <h1>Logout in process</h1>
    )
}


LogOut.propTypes = {
    isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, logout })(LogOut);
