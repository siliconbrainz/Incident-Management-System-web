import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { customerDetailsFetch } from '../../../Actions/customer'
import Pickup from '../PickupCards/Pickup'
const CustomerDetails = (props) => {


    const [pick, setPick] = useState(false)
    const { customerData, isAuthenticated } = props

    // if (!isAuthenticated)
    //     return <Redirect to='/login' />;

    const customer = customerData.find(customer => customer.rcNo === props.match.params.rcNo)
    // const index = customerData.indexOf(customer)
    // const data = customerData[index]
    const data = new Object(customer)



    return (
        <Fragment>
            <div>Customer Service Booked Details</div>
            <p><b>Name</b>:{data.name}</p>
            <p><b>Address</b>:{data.address}</p>
            <p><b>Email</b>:{data.email}</p>
            <p><b>phone Number</b>:{data.phNo}</p>
            <p><b>Vechile RC Number</b>:{data.rcNo}</p>
            <p><b>Vechile Model</b>:{data.version}</p>
            <p><b>Date of purchase</b>:{data.data_of_purchased}</p>
            <div>
                {pick ? <Pickup /> : null}
            </div>
            {pick ? null : <div> <button onClick={() => setPick(true)}>Pickup</button>
                <button disabled>Drop</button></div>}
        </Fragment>

    )
}

CustomerDetails.propTypes = {
    customerDetailsFetch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    customerData: state.customer.customerData
});




export default connect(mapStateToProps, { customerDetailsFetch })(CustomerDetails);