import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CustomerDetails from '../CustomerCards/CustomerDetails'

class index extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.rootlink = this.rootlink.bind(this)
    }

    rootlink = (customer) => {
        console.log('arrow function is called ')
        if (customer.status === 'ASSIGNED') {
            return (
                <Link to={`/call-assign/customer-details/${customer.customer_token}/`}>
                    &#x2192;
                </Link>
            )
        }
        else if (customer.status === 'PICKED') {

            return (
                <Link to={`/drop-pending/customer-details/${customer.customer_token}/`}>
                    &#x2192;
                </Link>
            )
        }
    }

    render() {
        console.log(this.props)
        const { customer } = this.props
        return (
            <div>
                <p> <b>Name :</b>  <i>{customer.name}</i>  </p>
                <p> <b>Email :</b>  <i>{customer.email}</i>  </p>
                <p> <b>RcNo :</b>  <i>{customer.rcNo}</i>  </p>
                <p> <b>Model :</b>  <i>{customer.model}</i>  </p>
                {customer.status === 'ASSIGNED' ? <Link to={`/call-assign/customer-details/${customer.customer_token}/`}>
                    &#x2192;
                </Link> : (customer.status === 'PICKED' ? <Link to={`/drop-pending/customer-details/${customer.customer_token}/`}>
                        &#x2192;
                </Link> : <Link to={`/drop-completed/customer-details/${customer.customer_token}/`}>
                            &#x2192;
                </Link>)}
                <hr /><hr />
            </div>
        )
    }
}

export default index
