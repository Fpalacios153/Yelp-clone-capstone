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

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (password != repeatPassword) { setErrors(['error: Passwords do not match']) }
  // }, [password, repeatPassword])

  const onSignUp = async (e) => {
    e.preventDefault();
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
            <div style={{ margin: '2px', fontWeight: '500', fontSize: '15px' }}>Connect with great local businesses</div>
            <div className='small-text'>By continuing, you agree to Help's Terms of Service and acknowledge Help!'s' Privacy Policy.</div>
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
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                ></input>
                <label></label>
                <input
                  className='name-input'
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

                  type='text'
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
