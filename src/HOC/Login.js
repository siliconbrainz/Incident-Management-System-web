import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../Actions/auth';
const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(username, password);
    };

    if (isAuthenticated)
        return <Redirect to='/call-assign' />;

    return (
        <div className=' auth'>
            <Helmet>
                <title>Realest Estate - Login</title>
                <meta
                    name='description'
                    content='login page'
                />
            </Helmet>
            <form className='auth__form' onSubmit={e => onSubmit(e)}>
                <div className='auth__form__group'>
                    <input
                        className='auth__form__input'
                        type='text'
                        placeholder='Username'
                        name='username' value={username}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='auth__form__group'>
                    <input
                        className='auth__form__input'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                    />
                </div>
                <div className='auth__form__group'>
                    <div className='auth__form__groupButton'>
                        <button className='auth__form__groupButton__login'>
                            <p className='auth__form__groupButton__login__tag'>Login</p>
                        </button>
                    </div>

                </div>
            </form>

        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login)
