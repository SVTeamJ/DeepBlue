import React,{useState} from "react";
import Login_page from "./loginpage";

function Is_login_check(){
  const [is_login,set_is_login] = useState(true);
  
  const set_login = () =>{
    set_is_login(true);
    
  }
  const set_signin = () =>{
    set_is_login(false);
  }

  return(
    <div className='insert_login_layout'>
      <div className="insert_switch_login">
        <button onClick={set_signin}>LOGIN</button>{/*버튼 작동함*/}
        <button onClick={set_login}>SIGNIN</button>{/*버튼 작동함*/}
      </div>
      <Login_page is_login_input={is_login}/>
    </div>
  );
}

export default Is_login_check;