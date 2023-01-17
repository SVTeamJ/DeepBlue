import React, { useState } from "react";


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
        <input
          placeholder="아이디"
          id = "id"
          className="login"
          onChange={e => {
            setId(e.target.value);
          }}
          //onKeyup={changeButton}
        />
        <input
          type="password"
          placeholder = "비밀번호"
          id="password"
          className="login"
          onChange={e => {
            setPw(e.target.value);
          }}
          onKeyUp={changeButton}
        />
        <button>
          LOGIN
        </button>
      </div>
    )
  }else{
    return(
      <div className="login_page">
        <input
          type="password"
          placeholder = "이름"
          id="password"
          className="login"
          onChange={e => {
            setPw(e.target.value);
          }}
          onKeyUp={changeButton}
        />
        <input
          placeholder="아이디"
          id = "id"
          className="login"
          onChange={e => {
            setId(e.target.value);
          }}
          //onKeyup={changeButton}
        />
        <input
          type="password"
          placeholder = "비밀번호"
          id="password"
          className="login"
          onChange={e => {
            setPw(e.target.value);
          }}
          onKeyUp={changeButton}
        />
        <input
          type="password"
          placeholder = "비밀번호확인"
          id="password"
          className="login"
          onChange={e => {
            setPw(e.target.value);
          }}
          onKeyUp={changeButton}
        />
        <button>
          회원가입
        </button>
      </div>
    )
  }

}

export default Login_page;