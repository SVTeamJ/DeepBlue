import React, { useState } from 'react';
import Login_page from './loginpage';
import './index.scss';
function Is_login_check({ round = false }) {
  const [is_login, set_is_login] = useState(true);

  const set_toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.innerHTML == '로그인') {
      set_is_login(true);
    } else {
      set_is_login(false);
    }
  };

  return (
    <div className="insert_login_layout">
      <div className="insert_switch_login">
        <button
          className={`switch_button_${is_login ? 'true' : 'false'}`}
          onClick={set_toggle}
        >
          로그인
        </button>
        <button
          className={`switch_button_${is_login ? 'false' : 'true'}`}
          onClick={set_toggle}
        >
          회원가입
        </button>
      </div>
      <Login_page is_login={is_login} />
    </div>
  );
}

export default Is_login_check;
