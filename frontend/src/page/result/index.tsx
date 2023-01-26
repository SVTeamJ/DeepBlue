import { fishResult } from '@/mocks/handlers';
import React, { useEffect, useState } from 'react';
import './index.scss';
import dolImg from '../../assets/image 69.png';
import Nav from '@/components/nav';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResultData } from '@/type/result';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UUid } from '@/atom/atom';

interface RouterState {
  data: result;
}
interface result {
  classification: string;
  close_season: string;
  description: string;
  habitat: string;
  image_url: string;
  model: string;
  scientific_name: string;
  toxicity: string;
  type: string;
}

interface Storge{
  fish_url : string;
  fish_model : number;
}

async function post_storge(result:any,user:any) {
  const body: Storge = {
    fish_url : result.image_url,
    fish_model : result.model,
  };
  console.log(body);
  await axios
    .post(`http://localhost:8000/api/history/${user.id}`, body)
    .then((res)=>{
      console.log(res.data);
    })
}

const Result = () => {
  const user = useRecoilValue(UUid);
  const navigater = useNavigate();
  const location = useLocation();
  const resultData = (location.state as RouterState)?.data;
  useEffect(() => {
    //여기다가 도감페이지에 저장해주는 post요청해주세요
    console.log(resultData);
    console.log(user);
    post_storge(resultData,user);
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
              <img className="insert_dolpic" src={resultData?.image_url}></img>
            </div>
            <div className="insert_smallbox2">
              <div className="insert_topBox"></div>
              <div className="insert_normalBox1">
                <div className="insert_Namebox">{resultData?.type}</div>
                <div className="insert_smallNamebox">
                  학명 : {resultData?.scientific_name}
                </div>
              </div>
              <div className="insert_discribeBox">
                {resultData?.description}
              </div>
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
                  {resultData?.classification}
                  <br />
                  {resultData?.habitat}
                  <br />
                  {resultData?.toxicity}
                  <br />
                  {resultData?.close_season}
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
