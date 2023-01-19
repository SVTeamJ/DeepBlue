import React from 'react';
import './index.scss';
import dolImg from '../../assets/image 69.png';
import Nav from '@/components/nav';


const Result = () => {
  return (
    <div>
      <div className="insert_resultback">
      <Nav></Nav>
        <div className="insert_resulttitle">Ai가 예측한 결과입니다!</div>
        <div className="insert_resultpage">
          <div className="insert_linebox"></div>
          <div className="insert_bigbox">
            <div className="insert_smallbox1">
                <img className="insert_dolpic" src={dolImg}></img>
            </div>
              <div className="insert_smallbox2">
                <div className="insert_topBox"></div>
                <div className="insert_normalBox1">
                  <div className="insert_Namebox">돌고래</div>
                  <div className="insert_smallNamebox">학명 : dolphin</div>
                </div>
                <div className="insert_discribeBox">돌고래가 어류가 아닌건 아는데 귀여워서 예시로 드는겁니다. 저도 결과설명을 쓸 줄은 몰랐어요. tmi입니까? 네 알겠습니다~ 여기서 설명이 더 들어갈지는 백엔드 연결을 아직 안해서 모르겠어요.</div>
                <div className="insert_qnaBox">
                  <div className="insert_questionBox">분류<br/>서식지<br/>독성유무<br/>산란기</div>
                  <div className="insert_answerBox">포유류<br/>바다<br/>무<br/>7~8월</div>
                </div>
              </div> 
          </div>
          <div className="insert_rbottombox">
            <div className="insert_cbutton">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;확인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;