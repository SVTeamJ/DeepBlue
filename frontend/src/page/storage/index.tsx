import { fishInform } from '@/mocks/handlers';
import { restFetcher } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';
import glassPreview from '../../assets/glassPreview.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import DetailFishList from '@/components/DetailFishList';
import logo from '../../assets/logo.png';
import Nav from '@/components/nav';
import { useRecoilState, useRecoilValue } from 'recoil';
import { User } from '@/components/signup';
import { UUid } from '@/atom/atom';
import { result } from '../result';

const BASE_URL = import.meta.env.DEV
  ? 'http://localhost:8000/api'
  : 'http://www.deepblue3.shop:8000/api';

async function get_storage(user: any, setData: any) {
  await axios
    //axios를 활용한 get요청
    .get(`${BASE_URL}/history/${user.id}`)
    //위의 주소에서 get으로 받아옴
    .then((res) => {
      console.log(res.data);
      setData(res.data);
      //data를 useState의 setData를 활용해서 저장함
    });
}

const Storage = () => {
  const navigator = useNavigate();
  const [userInform, setUserInform] = useRecoilState<User>(UUid);
  const [modal, setModal] = useState(false); //
  const [currentModalInform, setCurrentModalInform] = useState({
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
  //useState로 curretnModalInform의 초깃값 설정

  let token = localStorage.getItem('access_token');
  console.log(userInform.id);
  const user = useRecoilValue(UUid);
  //유저 정보를 관리하는 전역관리 recoil, useRecoilValue
  useEffect(() => {
    get_storage(user, setData);
  }, []);

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

  const [data, setData] = useState<result[] | null>();
  //useState를 활용해서 컴포넌트의 상태관리

  const showDetailFish = (item: result) => {
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
        {data?.map((item, index) => {
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
