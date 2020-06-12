import React, { Component } from 'react'
class PickupForm extends Component {
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

export default PickupForm
