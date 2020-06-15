import React, { Component, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

class index extends Component {

    render() {
        const { logout } = this.props
        const isAuthenticated = 'false';
        return (
            <Fragment>
                <ul className='navbar'>
                    <div className='navbar__brandLogo'>
                        <li >
                            <NavLink exact to='/' className='navbar__brandLogo__link'> <span className='navbar__brandLogo__link__logo'><i class="  fas fa-car" /></span></NavLink>
                        </li>
                    </div>
                    <div className='navbar__links'>
                        <li className='navbar__links__link'>
                            <NavLink exact to='/profile' className='navbar__links__link__profile navbar__links__link__nav'>
                                {/* <img className='navbar__links__link__profile__image' src="../../Assets/crop.jpeg" alt="Profile" /> */}
                                <span className='navbar__links__link__profile__image'> <i class="fas fa-user-alt"></i></span>

                            </NavLink>
                        </li>
                        <li className='navbar__links__link nav__logout'>
                            <NavLink exact to='/logout' className=' navbar__links__link__nav'>Logout</NavLink>
                        </li>
                    </div>
                </ul>
            </Fragment>
        )
    }

}
export default index;
