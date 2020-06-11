import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CustomerDetails from '../CustomerCards/CustomerDetails'

class index extends Component {


    render() {
        const { customer } = this.props
        return (
            <div>
                <p> <b>Name :</b>  <i>{customer.name}</i>  </p>
                <p> <b>Email :</b>  <i>{customer.email}</i>  </p>
                <p> <b>RcNo :</b>  <i>{customer.rcNo}</i>  </p>
                <p> <b>Model :</b>  <i>{customer.version}</i>  </p>
                <Link to={`/call-assign/customer-details/${customer.rcNo}/`}>
                    &#x2192;
                </Link>
                <hr /><hr />
            </div>
        )
    }
}

export default index
