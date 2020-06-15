import React, { Fragment } from 'react'
import CustomerDetails from '../CustomerCards/CustomerDetails'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { dropCalls } from '../../../Actions/drop'
const Complete = (props) => {

    const { isAuthenticated, customerData, dropVehicle } = props





    const customer = customerData.find((item) => item.customer_token === Number(props.match.params.customer_token))
    var customerObj = new Object(customer);
    if (!isAuthenticated)
        return <Redirect to='/login' />;

    return (
        <Fragment>
            <div className='generalContainer'>
                <h1 className='generalContainer__Title'>Drop Pending</h1>
                <div className='generalContainer__customerDetails'>
                    <CustomerDetails customer={customerObj} />
                </div>
            </div>
        </Fragment>
    )

}

Complete.propTypes = {
    dropCalls: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    customerData: state.drop.customerData
});

export default connect(mapStateToProps, { dropCalls })(Complete);