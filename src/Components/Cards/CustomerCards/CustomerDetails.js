import React, { Component, Fragment } from 'react'

export class CustomerDetails extends Component {
    render() {
        const { customer } = this.props
        return (

            <Fragment>
                <h3 className=' generalContainer__customerDetails__Title'>Customer details</h3>
                <div className='generalContainer__customerDetails__card'>
                    <p className='generalContainer__customerDetails__card__id'>#{customer.customer_token}</p>
                    <div className='generalContainer__customerDetails__card__container1'>
                        <p className='generalContainer__customerDetails__card__text' >{customer.name}</p>
                        <p className='generalContainer__customerDetails__card__text' >{customer.model}</p>
                    </div>
                    <div className='generalContainer__customerDetails__card__container2'>

                        <p className='generalContainer__customerDetails__card__text generalContainer__customerDetails__card__phNo' > +91 {customer.phNo}</p>
                        <p className='generalContainer__customerDetails__card__text' >{customer.rcNo}</p>
                    </div>
                    <div className='generalContainer__customerDetails__card__container3'>
                        <p className='generalContainer__customerDetails__card__text generalContainer__customerDetails__card__container3__address' >{customer.address}</p>
                        <span className='generalContainer__customerDetails__card__container3__map' ><i class="fas fa-map-marker-alt" /><p className='generalContainer__customerDetails__card__container3__map__text'>Map</p></span>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default CustomerDetails
