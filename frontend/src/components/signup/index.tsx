import { restFetcher } from '@/queryClient';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import './index.scss';

export interface User extends createUser {
  id: string;
  is_active?: boolean;
}

interface createUser {
  name: string;
  username: string;
  password1: string;
  password_check: string;
}

const SignUpComponents = () => {
  const [userName, setUserName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [checkPw, setCheckPw] = useState('');

  const { mutate } = useMutation((newUser: createUser) => {
    return restFetcher({
      method: 'POST',
      path: '/users/signup',
      body: newUser,
    });
  });

  //유저 생성
  const createUser = () => {
    const newUser = {
      name: userName,
      username: id,
      password1: pw,
      password_check: checkPw,
    };
    mutate(newUser, {
      onSuccess: () => {
        alert('회원가입 완료!');
      },
      onError: () => {
        alert('중복된 아이디입니다!');
      },
    });
  };

  return (
    <div className="signup_page">
      <div className="join_us">JOIN US</div>
      <div className="user_input">
        <div className="signup_page_text">이름</div>
        <input
          placeholder="이름을 입력해주세요"
          id="name"
          required
          className="signup_page_input"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="user_input">
        <div className="signup_page_text">아이디</div>
        <input
          required
          placeholder="아이디를 입력해주세요"
          id="id"
          className="signup_page_input"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </div>
      <div className="user_input">
        <div className="signup_page_text">비밀번호</div>
        <input
          required
          type="password"
          placeholder="영문자,숫자,특수문자, 포함 최소 8~10자"
          id="password"
          className="signup_page_input"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
      </div>
      <div className="user_input">
        <div className="signup_page_text">비밀번호 확인</div>
        <input
          required
          type="password"
          placeholder="비밀번호를 확인해주세요"
          id="password"
          className="signup_page_input"
          onChange={(e) => {
            setCheckPw(e.target.value);
          }}
        />
      </div>
      <button onClick={createUser} className="signup_page_button">
        회원가입
      </button>
    </div>
  );
};

export default SignUpComponents;
