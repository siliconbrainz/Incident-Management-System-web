import React, { Component } from 'react'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import StatusCards from '../StatusCards'
import { pendingCalls } from '../../../Actions/pending'
const DropPending = ({ pendingCalls, isAuthenticated, customerData }, props) => {

    useEffect(() => {

        pendingCalls()
    }, []);


    // if (!isAuthenticated)
    //     return <Redirect to='/login' />;
    return (

        <div className='container callContainer'>
            <h1 className='callContainer__Title'>Drop pending</h1>
            {
                customerData.map((customer) => (
                    <StatusCards customer={customer} {...props} key={customer.customer_token} />
                ))
            }
        </div>
    )

}


DropPending.propTypes = {
    pendingCalls: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    customerData: state.pending.customerData
});

export default connect(mapStateToProps, { pendingCalls })(DropPending);
