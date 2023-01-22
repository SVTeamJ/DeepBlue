import React, { useState } from 'react';

const LoginComponent = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [button, setButton] = useState(true);

  function changeButton() {
    id.includes('@') && pw.length >= 5 ? setButton(false) : setButton(true);
  }
  return (
    <div className="login_page">
      <div className="join_us">LOGIN</div>
      <div>
        <div className="login_text">아이디</div>
        <input
          placeholder="아이디를 입력해주세요"
          id="id"
          className="login_input"
          onChange={(e) => {
            setId(e.target.value);
          }}
          //onKeyup={changeButton}
        />
      </div>

      <div>
        <div className="login_text">비밀번호</div>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          id="password"
          className="login_input"
          onChange={(e) => {
            setPw(e.target.value);
          }}
          onKeyUp={changeButton}
        />
      </div>
      <button className="login_button">로그인</button>
    </div>
  );
};

export default LoginComponent;
