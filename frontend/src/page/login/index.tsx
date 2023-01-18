import React, { useState } from 'react';
import './index.scss';
import Is_login_check from './is_login';
import Icon from '@/assets/icon.png'
import Whale from '@/assets/whale.png'


const Login = () => {
  return (
    <div>
      <div className="login_background">
        <div className='login_left_background'>
          <div className='login_welcome_background' >
            <div className='login_welcome'>Welcome!</div>
            <div className='login_ment'>Please login to use more service</div>
            <img className = 'whale_img'src={Whale}></img>
          </div>
        </div>
        <div className='login_right_background'>
          <button className='mobile_welcome' >Welcome!</button>
          <Is_login_check/>
        </div>
      </div>
    </div>
  );
};

export default Login;
