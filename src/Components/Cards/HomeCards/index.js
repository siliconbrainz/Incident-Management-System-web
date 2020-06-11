import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class index extends Component {
    render() {
        const { title, slug, customerData } = this.props
        return (
            <Fragment>
                <Link to={`/${slug}`
                } >
                    <h1>{title}</h1>
                </Link>
            </Fragment>
        )
    }
}

export default index

