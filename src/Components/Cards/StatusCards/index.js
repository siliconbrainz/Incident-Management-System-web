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
            <div className='callContainer__card'>

                {customer.status === 'ASSIGNED' ? <Link style={{ textDecoration: 'none' }} to={`/call-assign/customer-details/${customer.customer_token}/`}>
                    <div className='callContainer__card__link'>
                        <p className='callContainer__card__link__text callContainer__card__link__id'># {customer.customer_token} </p>
                        <div className='  callContainer__card__link__details'>
                            <div className='callContainer__card__link__details__container1'>
                                <p className='callContainer__card__link__text callContainer__card__link__details__container1__name'>  {customer.name}  </p>
                                <p className='callContainer__card__link__text callContainer__card__link__details__container1__model' >  {customer.model}  </p>
                            </div>

                            <div className='callContainer__card__link__details__container2'>
                                <p className='callContainer__card__link__text callContainer__card__link__details__container2__phNo' >  9008088227 </p>
                                <p className='callContainer__card__link__text callContainer__card__link__details__container2__rcNo' >  {customer.rcNo} </p>
                            </div>

                        </div>
                    </div>
                </Link> : (customer.status === 'PICKED' ? <Link style={{ textDecoration: 'none' }} className='callContainer__card__link' to={`/drop-pending/customer-details/${customer.customer_token}/`}>
                    <div className='callContainer__card__link'>
                        <p className='callContainer__card__link__text callContainer__card__link__id'># {customer.customer_token} </p>
                        <div className='  callContainer__card__link__details'>
                            <div className='callContainer__card__link__details__container1'>
                                <p className='callContainer__card__link__text callContainer__card__link__details__container1__name'>  {customer.name}  </p>
                                <p className='callContainer__card__link__text callContainer__card__link__details__container1__model' >  {customer.model}  </p>
                            </div>

                            <div className='callContainer__card__link__details__container2'>
                                <p className='callContainer__card__link__text callContainer__card__link__details__container2__phNo' >  9008088227 </p>
                                <p className='callContainer__card__link__text callContainer__card__link__details__container2__rcNo' >  {customer.rcNo} </p>
                            </div>

                        </div>
                    </div>
                </Link> : <Link style={{ textDecoration: 'none' }} className='callContainer__card__link' to={`/drop-completed/customer-details/${customer.customer_token}/`}>
                        <div className='callContainer__card__link'>
                            <p className='callContainer__card__link__text callContainer__card__link__id'># {customer.customer_token} </p>
                            <div className='  callContainer__card__link__details'>
                                <div className='callContainer__card__link__details__container1'>
                                    <p className='callContainer__card__link__text callContainer__card__link__details__container1__name'>  {customer.name}  </p>
                                    <p className='callContainer__card__link__text callContainer__card__link__details__container1__model' >  {customer.model}  </p>
                                </div>

                                <div className='callContainer__card__link__details__container2'>
                                    <p className='callContainer__card__link__text callContainer__card__link__details__container2__phNo' >  9008088227 </p>
                                    <p className='callContainer__card__link__text callContainer__card__link__details__container2__rcNo' >  {customer.rcNo} </p>
                                </div>

                            </div>
                        </div>
                    </Link>)}
            </div>
        )
    }
}

export default index
