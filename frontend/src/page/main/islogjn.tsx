import React,{useState} from "react";

function Is_login_check(){
  const [is_login,set_is_login] = useState(0);
  const set_login = () =>{
    set_is_login(0);
  }
  const set_signin = () =>{
    set_is_login(1);
  }

  return(
    <div className="insert_switch_login">
      <div onClick={set_login}>login {is_login}</div>
      <div onClick={set_signin}>signin{is_login}</div>
    </div>
  );
}

export default Is_login_check;