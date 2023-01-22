import React, { useState } from 'react';
import whale from '@/assets/png_whale2.jpeg';
import LoginComponent from '@/components/login';
import SignUpComponents from '@/components/signup';

const Login_page = (props: any) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [button, setButton] = useState(true);

  function changeButton() {
    id.includes('@') && pw.length >= 5 ? setButton(false) : setButton(true);
  }

  const is_login_page = props.is_login_input;

  if (!is_login_page) {
    return <LoginComponent />;
  } else {
    return <SignUpComponents />;
  }
};

export default Login_page;
