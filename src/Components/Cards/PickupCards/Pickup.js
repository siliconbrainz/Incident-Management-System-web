import React, { Component, Fragment } from 'react'
import CustomerDetails from '../CustomerCards/CustomerDetails'
import { Link, Redirect } from 'react-router-dom'
export class Pickup extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.handelFrom = this.handelFrom.bind(this)
    }

    handelFrom = (e) => {
        e.preventDefault()
        return (
            <Redirect to='/' />
        )
    }

    render() {
        return (
            <Fragment>

                <form action='/'>
                    <h3>Upload the Customer Vechile Details</h3>
                    <input type="number" placeholder='OdoMeter' /><br />
                    <input type="number" placeholder='fuel' /><br />
                    <label htmlFor="ServicerBook">ServiceBook:</label>
                    <input type="checkbox" placeholder='ServiceBook' id='ServicerBook' /><br />
                    <input type="submit" /><br />
                </form>
            </Fragment>
        )
    }
}

export default Pickup
