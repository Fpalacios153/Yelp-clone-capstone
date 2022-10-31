import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import DemoUser from '../DemoUser';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  useEffect(() => {
    let error = []
    if (email.length > 35) { error.push('error: Email must be less than 35 characters') }
    if (password.length > 20) { error.push('error:Password over 20 character limit') }

    setErrors(error)

  }, [email, password])

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className='login-top-bar'>
        <div className="top-bar-logo">
          <NavLink className="title-splash" to='/'>
            Help!
          </NavLink>
          <NavLink className="title-splash" to='/'>
            <img className="burger-splash" src="/static/images/logos/icons8-hamburger-48.png" alt='burger-logo'></img>
          </NavLink>
        </div>
      </div>
      <div className='entire-form-container'>
        <div className='login-form-container'>
          <div className='word-top-of-login-form'>
            <h2 style={{ margin: '5px', color: '#d32323' }}>Log in to Help!</h2>
            <div style={{ margin: '5px', fontWeight: 'bold' }}>New to Help!? {' '}
              <NavLink className='sign-up-login-form' to='/sign-up'>Sign up</NavLink>
            </div>
            {/* <div className='small-text'>By logging in, you agree to Help's Terms of Service and Privacy Policy.</div> */}
          </div>

          <form onSubmit={onLogin}>
            <div className='error-styling'>
              {errors.map((error, ind) => (
                <div className='error-text' key={ind}>{error.split(":")[1]}</div>))}
            </div>
            <div>
              <label htmlFor='email' className='login-form-label'>
                {/* Email */}
              </label>
              <input
                className='login-form-input'
                required
                maxLength={36}
                name='email'
                type='email'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div>
              <label htmlFor='password'>
                {/* Password */}
              </label>
              <input
                className='login-form-input'
                required
                name='password'
                type='password'
                placeholder='Password'
                maxLength={21}
                value={password}
                onChange={updatePassword}
              />
              <div>
                <button className='login-form-buttom' type='submit'>Log In</button>
              </div>
              <div className='bottom-switch-page'>
                New to Help!?
                <NavLink className='sign-up-login-form' to='/sign-up'>Sign up</NavLink>
              </div>

              <div className='OR-container'>
                <fieldset className='OR-separator'>
                  <legend className='OR'>OR</legend>
                </fieldset>
              </div>
              <div>
                <DemoUser />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
