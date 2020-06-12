import React, { Component } from 'react'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import StatusCards from '../StatusCards'
import { dropCalls } from '../../../Actions/drop.js'
const DropCompleted = ({ dropCalls, isAuthenticated, customerData }, props) => {

    useEffect(() => {

        dropCalls()
    }, []);


    // if (!isAuthenticated)
    //     return <Redirect to='/login' />;
    return (
        <div>
            {
                customerData.map((customer) => (
                    <StatusCards customer={customer} {...props} key={customer.customer_token} />
                ))
            }
        </div>
    )

}


DropCompleted.propTypes = {
    dropCalls: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    customerData: state.drop.customerData
});

export default connect(mapStateToProps, { dropCalls })(DropCompleted);
