import React from 'react';
import './css/login1.css';
import email from './images/email.png';
import user from './images/user.jpg';
import password from './images/password.jpg';
const Login = () => {
  return (
    <div className='container'>
    <div className='header'>
    <div className='text'>sign up</div>
    <div className='underline'> </div>
    </div>
      <div className='inputs'>
        <div className='input'>
        <img src={user} alt=''/>
        <input type='text' placeholder='name'/>
        </div>
        <div className='input'>
        <img src={email} alt=''/>
        <input type='email' placeholder='emailid'/>
        </div>
        <div className='input'>
        <img src={password} alt=''/>
        <input type='password' placeholder='password'/>
        </div>
      </div>
      <div className='forget-password'>lost password?<span>click hear?</span></div>
      <div className='submit-container'>
        <div className='submit'>sign up</div>
        <div className='submit'>login</div>
      </div>
    </div>
  )
}

export default Login
