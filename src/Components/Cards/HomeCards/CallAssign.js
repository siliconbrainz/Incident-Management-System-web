import React, { Component } from 'react'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import StatusCards from '../StatusCards'
import { customerDetailsFetch } from '../../../Actions/customer'
const CallAssign = ({ customerDetailsFetch, isAuthenticated, customerData }, props) => {

    useEffect(() => {

        customerDetailsFetch()
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


CallAssign.propTypes = {
    customerDetailsFetch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    customerData: state.customer.customerData
});

export default connect(mapStateToProps, { customerDetailsFetch })(CallAssign);
