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
      <div>
        <input
          placeholder="전화번호 사용자 이름 또는 이메일"
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
      </div>
    )
  }else{
    return(
      <div>signin</div>
    )
  }

}

export default Login_page;