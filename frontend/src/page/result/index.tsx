import { fishResult } from '@/mocks/handlers';
import React, { useEffect, useState } from 'react';
import './index.scss';
import dolImg from '../../assets/image 69.png';
import Nav from '@/components/nav';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResultData } from '@/type/result';
interface RouterState {
  data: ResultData;
}
interface result {
  closed_season: string;
  description: string;
  fish_type: string;
  open_season: string;
  toxicity: string;
  url: string;
}
const Result = () => {
  const navigater = useNavigate();
  const location = useLocation();
  const resultData = (location.state as RouterState)?.data;
  const [result, setResult] = useState<result | null>();
  useEffect(() => {
    const result = { url: resultData.url, ...resultData.fields };
    setResult(result);
    console.log(result);

    //여기다가 도감페이지에 저장해주는 post요청해주세요
  }, []);

  const gotoMain = () => {
    navigater('/');
  };
  return (
    <div>
      <div className="insert_resultback">
        <Nav></Nav>
        <div className="insert_resulttitle">Ai가 예측한 결과입니다!</div>
        <div className="insert_resultpage">
          <div className="insert_linebox"></div>
          <div className="insert_bigbox">
            <div className="insert_smallbox1">
              <img className="insert_dolpic" src={result?.url}></img>
            </div>
            <div className="insert_smallbox2">
              <div className="insert_topBox"></div>
              <div className="insert_normalBox1">
                <div className="insert_Namebox">{result?.fish_type}</div>
                <div className="insert_smallNamebox">학명 : Dasyatis akajei</div>
              </div>
              <div className="insert_discribeBox">노랑가오리는 색가오리과에 속하는 물고기로
꼬리에 긴 독가시가 하나 있는데 길이가 약 15cm 이기 때문에 매우 기다란 것 뿐만 아니라 양쪽에 톱니가 있어 인간의 몸을 찌르면
몹시 아플 뿐만 아니라 독가시 끝에 맹독이 있어 기절하고 심지어 사망하는 수도 있다</div>
              <div className="insert_qnaBox">
                <div className="insert_questionBox">
                  분류
                  <br />
                  서식지
                  <br />
                  독성유무
                  <br />
                  산란기
                </div>
                <div className="insert_answerBox">
                  포유류
                  <br />
                  서태평양 지역의 얕은 바다와 강 하구
                  <br />
                  O
                  <br />
                  5월 ~ 8월
                </div>
              </div>
            </div>
          </div>
          <div className="insert_rbottombox">
            <div onClick={gotoMain} className="insert_cbutton">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;확인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
