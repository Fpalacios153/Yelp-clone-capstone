import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"
import { logout } from '../../store/session';
import './Logout.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const onLogout = async (e) => {
    await dispatch(logout());
    await history.push('/')
  };

  return (
    <>
      <button className='logout-button' onClick={onLogout}>
        <i className="fa fa-sign-out logout-pic" aria-hidden="true"></i>
        Log Out</button>
    </>)

};

export default LogoutButton;
