import React, { useState } from 'react';
import './index.scss';
import Is_login_check from './is_login';
import Icon from '@/assets/icon.png';
import Whale from '@/assets/whale.png';
import Nav from '@/components/nav';

const Login = () => {
  return (
    <>
      <div className="login_background">
        <Nav />
      </div>
    </>
  );
};

export default Login;
