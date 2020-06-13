import React, { Component, Fragment } from 'react'
import CustomerDetails from '../CustomerCards/CustomerDetails'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import StatusCards from '../StatusCards'
import { dropVehicle, dropCalls } from '../../../Actions/drop'
import { pendingCalls } from '../../../Actions/pending'
const Drop = (props) => {
    const { isAuthenticated, customerData, dropVehicle, dropUploaded } = props
    console.log(customerData, 'customerData')
    const [fromData, setFromData] = useState({
        remarks: '',
    });

    const { remarks
    } = fromData
    const onChange = e => setFromData({ ...fromData, [e.target.name]: e.target.value });


    const onSubmit = e => {
        e.preventDefault();
        dropVehicle(remarks, props.match.params.customer_token)
        return <Redirect to='/' />;
    };


    const customer = customerData.find((item) => item.customer_token === props.match.params.customer_token)
    var customerObj = new Object(customer);
    if (!isAuthenticated)
        return <Redirect to='/login' />;
    if (dropUploaded)
        return <Redirect to='/' />;


    return (
        <Fragment>
            <CustomerDetails customer={customerObj} />
            <form onSubmit={(e) => onSubmit(e)} >

                <textarea name="remarks" id="remarks" cols="30" rows="10" value={remarks} placeholder='remarks' onChange={(e) => onChange(e)}></textarea>
                <input type="submit" placeholder='Drop' />
            </form>
        </Fragment>
    )

}


Drop.propTypes = {
    pendingCalls: PropTypes.func.isRequired,
    dropVehicle: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    customerData: state.pending.customerData,
    dropUploaded: state.drop.dropUploaded,

});

export default connect(mapStateToProps, { pendingCalls, dropVehicle })(Drop);
