import React,{useState} from "react";
import Login_page from "./loginpage";

function Is_login_check({round=false}){
  const [is_login,set_is_login] = useState(false);
  const set_login = () =>{
    set_is_login(true);
    
  }
  const set_signin = () =>{
    set_is_login(false);
  }
  return(
    <div className='insert_login_layout' >
      <div className="insert_switch_login">
        <button className={`switch_button_${is_login?'true' : 'false' }`} onClick={set_signin}>로그인</button>
        <button className={`switch_button_${is_login?'false' : 'true' }`}  onClick={set_login}>회원가입</button>
      </div>
      <Login_page is_login_input={is_login}/>
    </div>
  );
}

export default Is_login_check;