import React, { Component } from 'react'
import StatusCards from '../StatusCards'
class DropCompleted extends Component {
    render() {
        return (

            <div>
                <StatusCards status={'Drop Completed'} />
                <StatusCards status={'pick Completed'} />
                <StatusCards status={'Drop Completed'} />
                <StatusCards status={'Drop Completed'} />
                <StatusCards status={'Drop Completed'} />

            </div >
        )
    }
}

export default DropCompleted
