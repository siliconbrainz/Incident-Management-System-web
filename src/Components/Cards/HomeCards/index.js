import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class index extends Component {
    render() {
        const { title, slug, customerData } = this.props
        return (
            <Fragment >
                <div className='home'>
                    <div className='home__container'>
                        <Link to={`/${slug}`
                        } className='home__container__link' >
                            <h1>{title}</h1>
                        </Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default index

