import React, { useState } from "react";
import whale from '@/assets/png_whale2.jpeg';

const Login_page = (props:any) => {
  const [id, setId] = useState('');
  const [pw,setPw] = useState('');

  const [button, setButton] = useState(true);

  function changeButton(){
    id.includes('@') && pw.length >= 5 ? setButton(false) : setButton(true);
  }
  
  const is_login_page = props.is_login_input;

  if(!is_login_page){
    return(
      <div className="login_page">
        <div className="join_us">
          LOGIN
        </div>
        <img className="small_whale" src={whale}></img>
        <div>
          <div className="login_text">아이디</div>
          <input
            placeholder="아이디를 입력해주세요"
            id = "id"
            className="login_input"
            onChange={e => {
              setId(e.target.value);
            }}
            //onKeyup={changeButton}
          />
        </div>
        
        <div>
          <div className="login_text">비밀번호</div>
          <input
            type="password"
            placeholder = "비밀번호를 입력해주세요"
            id="password"
            className="login_input"
            onChange={e => {
              setPw(e.target.value);
            }}
            onKeyUp={changeButton}
        />
        </div>
        <button className="login_button">
          로그인
        </button>
      </div>
    )
  }else{
    return(
      <div className="login_page">
        <div className="join_us">
          JOIN US
        </div>
        <div>
          <div className="login_text">이름</div>
          <input
            placeholder = "이름을 입력해주세요"
            id="name"
            className="login_input"
            onChange={e => {
              setPw(e.target.value);
            }}
            onKeyUp={changeButton}
          />
        </div>
        <div>
          <div className="login_text">아이디</div>
          <input
            placeholder="아이디를 입력해주세요"
            id = "id"
            className="login_input"
            onChange={e => {
              setId(e.target.value);
            }}
            //onKeyup={changeButton}
          />
        </div>
        <div>
          <div className="login_text">비밀번호</div>
          <input
            type="password"
            placeholder = "영문자,숫자,특수문자, 포함 최소 8~10자"
            id="password"
            className="login_input"
            onChange={e => {
              setPw(e.target.value);
            }}
            onKeyUp={changeButton}
          />
        </div>
        <div>
          <div className="login_text">비밀번호 확인</div>
          <input
            type="password"
            placeholder = "비밀번호를 확인해주세요"
            id="password"
            className="login_input"
            onChange={e => {
              setPw(e.target.value);
            }}
            onKeyUp={changeButton}
          />
        </div>
        <button className="login_button">
          회원가입
        </button>
      </div>
    )
  }

}

export default Login_page;