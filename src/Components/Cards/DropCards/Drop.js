import React, { Component } from 'react'
import CustomerDetails from '../CustomerCards/CustomerDetails'
class Drop extends Component {
    state = {
        name: 'Harish',
        age: '24',
        rcNo: 'KA-04-EE-1961',
        dateOfRequest: '2020-06-08'
    }
    render() {
        const { name, age, rcNo, dateOfRequest } = this.state
        console.log(this.props)
        return (
            <div>
                {/* <div >
                    <h3>Customer Details</h3>
                    <div >
                        <p>Name:{name}</p>
                        <p>Age:{age}</p>
                        <p>RcNo:{rcNo}</p>
                        <p>Date of request:{dateOfRequest}</p>
                    </div>
                </div> */}
                {/* <CustomerDetails /> */}
                <form action="/">
                    <h3>Upload Customer Remarks</h3>
                    <textarea name="" id="" cols="30" rows="10"></textarea><br />
                    <input type="submit" /><br />
                </form>
            </div>
        )
    }
}

export default Drop
