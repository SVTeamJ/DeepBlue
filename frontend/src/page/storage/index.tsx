import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import './index.scss';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import DetailFishList from '@/components/DetailFishList';
import Nav from '@/components/nav';
import { useRecoilState, useRecoilValue } from 'recoil';
import { User } from '@/components/signup';
import { UUid } from '@/atom/atom';
import { result } from '../result';
import { get_storage, resultType, resultType2 } from 'api/api';

const BASE_URL = import.meta.env.DEV
  ? 'http://localhost:8000/api'
  : 'http://www.deepblue3.shop:8000/api';

const Storage = () => {
  const navigator = useNavigate();
  const user = useRecoilValue(UUid);
  const [modal, setModal] = useState(false); //
  const [currentModalInform, setCurrentModalInform] = useState<resultType2>({
    classification: '',
    closed_season: '',
    description: '',
    habitat: '',
    fish_url: '',
    model: '',
    scientific_name: '',
    toxicity: '',
    fish_type: '',
  });

  const { data: res } = useQuery(['HISTORY'], () => get_storage(user));
  let token = localStorage.getItem('access_token');

  if (!token) {
    (async () => {
      alert('로그인이 필요한 서비스입니다.');
    })();
    return (
      <>
        <Navigate replace to="/" />
      </>
    );
  }

  const showDetailFish = (item: any) => {
    setCurrentModalInform(() => item); //curretnModalInform을 item으로 변경
    setModal(true); //Modal을 true로 변경
  };

  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fishList_view">
      <Nav />
      <div className="fishList_view-title">
        <h1>내가 잡은 물고기 보기</h1>
        <p>이곳에서 여러분이 잡은 물고기의 정보를 모두 볼 수 있어요!</p>
      </div>
      <div onClick={gotoTop} className="fishList_gotoMain"></div>
      <div className="fishList_view-grid">
        {res?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => showDetailFish(item)}
              className="fishList_view-card"
            >
              <div
                style={{
                  backgroundImage: `url(${item.fish_url})`,
                }}
                className="fishList_view-img"
              ></div>
            </div>
          );
        })}
      </div>
      {modal ? (
        <DetailFishList
          modal={modal}
          setModal={setModal}
          {...currentModalInform}
        ></DetailFishList>
      ) : null}
    </div>
  );
};

export default Storage;
