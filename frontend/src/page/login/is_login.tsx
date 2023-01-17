import React,{useState} from "react";
import Login_page from "./loginpage";

function Is_login_check({round=false}){
  const [is_login,set_is_login] = useState(false);
  const set_login = () =>{
    set_is_login(!is_login);
  }
  return(
    <div className='insert_login_layout' >
      <label className="switch">
        <input type="checkbox"/>
        <span className="slider rounded "onClick={set_login}/>

      </label>
      <Login_page is_login_input={is_login}/>
    </div>
  );
}

export default Is_login_check;