import React, { Component, Fragment } from 'react'
import CustomerDetails from '../CustomerCards/CustomerDetails'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import StatusCards from '../StatusCards'
import { dropVehicle, dropCalls } from '../../../Actions/drop'
const Drop = (props) => {

    const { isAuthenticated, customerData, dropVehicle } = props

    const [fromData, setFromData] = useState({
        remarks: '',
    });

    const { remarks
    } = fromData
    const onChange = e => setFromData({ ...fromData, [e.target.name]: e.target.value });


    const onSubmit = e => {
        e.preventDefault();
        dropVehicle(remarks, props.match.params.customer_token)
    };


    const customer = customerData.find((item) => item.customer_token === props.match.params.customer_token)
    var customerObj = new Object(customer);
    if (!isAuthenticated)
        return <Redirect to='/login' />;

    return (
        <Fragment>
            <CustomerDetails customer={customerObj} />
            <form onSubmit={(e) => onSubmit(e)} action='/'>

                <textarea name="remarks" id="remarks" cols="30" rows="10" value={remarks} placeholder='remarks' onChange={(e) => onChange(e)}></textarea>
                <input type="submit" placeholder='Drop' />
            </form>
        </Fragment>
    )

}


Drop.propTypes = {
    dropCalls: PropTypes.func.isRequired,
    dropVehicle: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    customerData: state.drop.customerData
});

export default connect(mapStateToProps, { dropCalls, dropVehicle })(Drop);
