import { restFetcher } from '@/queryClient';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import './index.scss';
const SignUpComponents = () => {
  const [userName, setUserName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [checkPw, setCheckPw] = useState('');

  const [button, setButton] = useState(true);

  function changeButton() {
    id.includes('@') && pw.length >= 5 ? setButton(false) : setButton(true);
  }

  //유저생성
  interface User {
    name: string;
    username: string;
    password1: string;
    password_check: string;
  }

  const { mutate, isLoading } = useMutation((newUser: User) => {
    return restFetcher({
      method: 'POST',
      path: 'http://localhost:8000/api/users/signup',
      body: newUser,
    });
  });

  const createUser = () => {
    const newUser = {
      name: userName,
      username: id,
      password1: pw,
      password_check: checkPw,
    };
    mutate(newUser, {
      onSuccess: (data) => {
        console.log(data);
        alert('회원가입 완료!');
      },
    });
  };
  return (
    <div className="signup_page">
      <div className="join_us">JOIN US</div>
      <div>
        <div className="signup_page_text">이름</div>
        <input
          placeholder="이름을 입력해주세요"
          id="name"
          required
          className="signup_page_input"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          onKeyUp={changeButton}
        />
      </div>
      <div>
        <div className="signup_page_text">아이디</div>
        <input
          required
          placeholder="아이디를 입력해주세요"
          id="id"
          className="signup_page_input"
          onChange={(e) => {
            setId(e.target.value);
          }}
          //onKeyup={changeButton}
        />
      </div>
      <div>
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
          onKeyUp={changeButton}
        />
      </div>
      <div>
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
          onKeyUp={changeButton}
        />
      </div>
      <button onClick={createUser} className="signup_page_button">
        회원가입
      </button>
    </div>
  );
};

export default SignUpComponents;
