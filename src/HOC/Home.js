import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import HomeCard from '../Components/Cards/HomeCards'
import { customerDetailsFetch } from '../Actions/customer'

const Home = ({ customerDetailsFetch, isAuthenticated, customerData }) => {

    // if (!isAuthenticated)
    //     return <Redirect to='/login' />;
    return (
        <div>
            <HomeCard title={'Call assigned'} slug={'call-assign'} />
            <HomeCard title={'Drop pending'} slug={'drop-pending'} />
            <HomeCard title={'Drop completed'} slug={'drop-completed'} />
        </div>
    )
}

Home.propTypes = {
    customerDetailsFetch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    customerData: state.customer.customerData
});

export default connect(mapStateToProps, { customerDetailsFetch })(Home);
