import { restFetcher } from '@/queryClient';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import axios from 'axios';
import { User } from '../signup';
import { useSetRecoilState } from 'recoil';
import { UUid } from '@/atom/atom';
import { AllUser } from '@/type/user';
interface userType {
  username: string;
  password: string;
}

const BASE_URL = import.meta.env.DEV
  ? 'http://localhost:8000/api'
  : 'http://www.deepblue3.shop:8000/api';

const LoginComponent = () => {
  const navigator = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const setUserInform = useSetRecoilState<User>(UUid);

  const { mutate, isLoading, isError } = useMutation((user: userType) => {
    return restFetcher({
      method: 'POST',
      path: 'http://www.deepblue3.shop:8000/api/users/login',
      params: user,
    });
  });

  const loginUser = () => {
    const user = {
      username: id,
      password: pw,
    };
    mutate(user, {
      onSuccess: async (data) => {
        console.log(data);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.accessToken}`;
        localStorage.setItem('access_token', data.access_token);
        navigator('/');

        const result = await axios.get(
          `http://www.deepblue3.shop:8000/api/users?skip=0&limit=100`,
        );
        const findUser = result.data.find(
          (item: AllUser) => item.username == data.username,
        );
        setUserInform(findUser);
      },
      onError: () => {
        alert('아이디 비번을 확인해 주세요!');
      },
    });
  };
  return (
    <div className="login_page">
      <div className="join_us">LOGIN</div>
      <div className="user_input">
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

      <div className="user_input">
        <div className="login_text">비밀번호</div>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          id="password"
          className="login_page_input"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
      </div>
      <button onClick={loginUser} className="login_button">
        로그인
      </button>
    </div>
  );
};

export default LoginComponent;
