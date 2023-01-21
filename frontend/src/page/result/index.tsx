import { fishResult } from '@/mocks/handlers';
import React, { useEffect, useState } from 'react';
import './index.scss';
import dolImg from '../../assets/image 69.png';
import Nav from '@/components/nav';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const resultData = (location.state as RouterState)?.data;
  const [result, setResult] = useState<result | null>();
  useEffect(() => {
    const result = { url: resultData.url, ...resultData.fields };
    setResult(result);
    console.log(result);

    //여기다가 도감페이지에 저장해주는 post요청해주세요
  }, []);
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
                <div className="insert_smallNamebox">학명 : dolphin</div>
              </div>
              <div className="insert_discribeBox">{result?.description}</div>
              <div className="insert_qnaBox">
                <div className="insert_questionBox">
                  분류
                  <br />
                  서식지
                  <br />
                  독성유무:
                  <br />
                  산란기
                </div>
                <div className="insert_answerBox">
                  포유류
                  <br />
                  바다
                  <br />
                  {result?.toxicity}
                  <br />
                  {result?.closed_season}~{result?.open_season}
                </div>
              </div>
            </div>
          </div>
          <div className="insert_rbottombox">
            <div className="insert_cbutton">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;확인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
