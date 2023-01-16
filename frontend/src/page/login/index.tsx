import React, { useState } from 'react';
import InsertImage from '../insertImage';
import './index.scss';
import { type } from 'os';
import { toUSVString } from 'util';
import Login_page from './loginpage';
import Is_login_check from './is_login';


const Login = () => {
  return (
    <div>
      <div className="login_background">
        <div className='login_left_background'>
        </div>
        <div className='login_right_background'>
          <div className='insert_right_center_background'>
            <div className='insert_login_layout'>
              <Is_login_check />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
