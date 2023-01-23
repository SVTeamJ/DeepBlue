import { restFetcher } from '@/queryClient';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import axios from 'axios';
interface userType {
  username: string;
  password: string;
}
const LoginComponent = () => {
  const navigator = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [button, setButton] = useState(true);

  function changeButton() {
    id.includes('@') && pw.length >= 5 ? setButton(false) : setButton(true);
  }

  const { mutate, isLoading, isError } = useMutation((user: userType) => {
    return restFetcher({
      method: 'POST',
      path: 'http://localhost:8000/api/users/login',
      params: user,
    });
  });

  const loginUser = () => {
    const user = {
      username: id,
      password: pw,
    };
    mutate(user, {
      onSuccess: (data) => {
        console.log(data);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.accessToken}`;
        localStorage.setItem('access_token', data.access_token);
        navigator('/');
      },
    });
  };
  return (
    <div className="login_page">
      <div className="join_us">LOGIN</div>
      <div className='user_input'>
        <div className="login_text">아이디</div>
        <input
          placeholder="아이디를 입력해주세요"
          id="id"
          className="login_page_input"
          onChange={(e) => {
            setId(e.target.value);
          }}
          //onKeyup={changeButton}
        />
      </div>

      <div className='user_input'>
        <div className="login_text">비밀번호</div>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          id="password"
          className="login_page_input"
          onChange={(e) => {
            setPw(e.target.value);
          }}
          onKeyUp={changeButton}
        />
      </div>
      <button onClick={loginUser} className="login_button">
        로그인
      </button>
    </div>
  );
};

export default LoginComponent;
