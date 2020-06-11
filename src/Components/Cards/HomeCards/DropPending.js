import React, { Component } from 'react'
import StatusCards from '../StatusCards'
class DropPending extends Component {
    render() {
        return (
            <div>
                <StatusCards status={'Drop Pending'} />
                <StatusCards status={'Drop Pending'} />
                <StatusCards status={'Drop Pending'} />
                <StatusCards status={'Drop Pending'} />
                <StatusCards status={'Drop Pending'} />

            </div>
        )
    }
}

export default DropPending
