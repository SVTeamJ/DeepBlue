import React, { useState } from 'react';
import './index.scss';
import Is_login_check from './is_login';
import Icon from '@/assets/icon.png';
import Whale from '@/assets/whale.png';
import Nav from '@/components/nav';
import Login_page from './loginpage';

const Login = () => {
  return (
    <>
      <div className="login_background">
        <Nav />
        <div className="login_mainLayout">
          <div className="login_explanation">
            <h1>Welcome!</h1>
            <p>Please log in to use more services</p>
            <img src={Whale}></img>
          </div>
          <div className="login_input">
            <div className="mobile_login_explanation">
              <h1>Welcome</h1>
            </div>
            <Is_login_check></Is_login_check>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
