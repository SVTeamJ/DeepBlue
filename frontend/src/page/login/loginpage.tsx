import React, { useState } from 'react';
import whale from '@/assets/png_whale2.jpeg';
import LoginComponent from '@/components/login';
import SignUpComponents from '@/components/signup';

interface Props {
  is_login: boolean;
}
const Login_page = ({ is_login }: Props) => {
  const is_login_page = is_login;

  if (!is_login_page) {
    return <LoginComponent />;
  } else {
    return <SignUpComponents />;
  }
};

export default Login_page;
