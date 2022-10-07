import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const [hasSumbitted, setHasSubmitted] = useState(false)

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let error = []
    if (password !== repeatPassword) { error.push('error: Passwords do not match') }
    if (password.length && password.length < 6 || password.length > 20) { error.push('error:Password must be between 6-20 characters') }
    if (username.length > 40) { error.push('error: Username must be less than 40 characters') }
    if (firstName.length > 25) { error.push('error: First Name must be less than 25 characters') }
    if (lastName.length > 25) { error.push('error: Last Name must be less than 25 characters') }
    if (email.length > 35) { error.push('error: Email must be less than 35 characters') }
    // setHasSubmitted(true)
    setErrors(error)
  }, [password, repeatPassword, username, email, firstName, lastName])

  const onSignUp = async (e) => {
    e.preventDefault();
    setHasSubmitted(true)
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, profilePic, username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
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
            <img className="burger-splash" src="/static/images/logos/icons8-hamburger-48.png"></img>
          </NavLink>
        </div>
      </div>


      <div className='entire-sign-up-from-container'>
        <div>
          <div className='word-top-of-login-form'>
            <h2 style={{ margin: '5px', color: '#d32323' }}>Sign Up for Help!</h2>
            <div style={{ margin: '5px', fontWeight: '500', fontSize: '15px' }}>Connect with great local businesses</div>
            {/* <div className='small-text'>By continuing, you agree to Help's Terms of Service and acknowledge Help!'s' Privacy Policy.</div> */}
          </div>
          <form onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div className='error-text' key={ind}>{error.split(":")[1]}</div>))}
            </div>
            <div>


              <div className='sign-up-name-container'>
                <label></label>
                <input
                  className='name-input'
                  maxLength={26}
                  required
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                ></input>
                <label></label>
                <input
                  maxLength={26}
                  className='name-input'
                  required
                  placeholder='Last Name'
                  type='text'
                  name='lastName'
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                ></input>
              </div>

              <div>
                <input
                  placeholder='Username'
                  className='login-form-input'
                  maxLength={41}
                  required
                  type='text'
                  name='username'
                  onChange={updateUsername}
                  value={username}
                ></input>
              </div>
              <div>
                <input
                  className='login-form-input'
                  placeholder='Email'
                  maxLength={36}
                  required
                  type='email'
                  name='email'
                  onChange={updateEmail}
                  value={email}
                ></input>
              </div>
              <div>
                <input
                  placeholder='Profile Picture'
                  className='login-form-input'

                  type='text'
                  name='profilePicture'
                  onChange={(e) => setProfilePic(e.target.value)}
                  value={profilePic}
                ></input>
              </div>
              <div>
                <input
                  className='login-form-input'
                  placeholder='Password'
                  maxLength={21}
                  // minLength={6}
                  required
                  type='password'
                  name='password'
                  onChange={updatePassword}
                  value={password}
                ></input>
              </div>
              <div>
                <input
                  className='login-form-input'
                  placeholder='Confirm Password'
                  maxLength={21}
                  type='password'
                  name='repeat_password'
                  onChange={updateRepeatPassword}
                  value={repeatPassword}
                  required={true}
                ></input>
              </div>
              <button className='login-form-buttom' type='submit'>Sign Up</button>
              <div className='bottom-switch-page'>
                Already on Help!?
                <NavLink className='sign-up-login-form' to='/login'>Log in</NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
