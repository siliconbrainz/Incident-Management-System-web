import React, { Component, Fragment } from 'react'

export class CustomerDetails extends Component {
    render() {
        const { customer } = this.props
        return (

            <Fragment>
                <div>Customer Service Booked Details</div>
                <p><b>Name</b>:{customer.name}</p>
                <p><b>Address</b>:{customer.address}</p>
                <p><b>Email</b>:{customer.email}</p>
                <p><b>phone Number</b>:{customer.phNo}</p>
                <p><b>Vechile RC Number</b>:{customer.rcNo}</p>
                <p><b>Vechile Model</b>:{customer.model}</p>
                <p><b>Date of purchase</b>:{customer.data_of_purchased}</p>
                <p><b>Customer Request Token</b>:{customer.customer_token}</p>
            </Fragment>
        )
    }
}

export default CustomerDetails
