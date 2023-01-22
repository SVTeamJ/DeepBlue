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
import { useRecoilState } from 'recoil';
import { User } from '@/components/signup';
import { UUid } from '@/atom/atom';
const Storage = () => {
  const navigator = useNavigate();
  const [userInform, setUserInform] = useRecoilState<User>(UUid);
  const [modal, setModal] = useState(false);
  const [currentModalInform, setCurrentModalInform] = useState({
    fish_type: '',
    toxicyty: '',
    image: '',
    closed_season: '',
    description: '',
  });

  let token = localStorage.getItem('access_token');
  console.log(userInform.id);
  const { data, isLoading } = useQuery(['USER'], () =>
    restFetcher({
      method: 'GET',
      path: `http://localhost:8000/api/users/${userInform.id}`,
    }),
  );

  if (!token && !data) {
    return <Navigate replace to="/" />;
  }
  console.log(data);

  // const { data } = useQuery<fishInform[]>(['FISHLIST'], () =>
  //   restFetcher({
  //     method: 'GET',
  //     path: '/api/v1/fishList/all',
  //   }),
  // );

  const showDetailFish = (item: fishInform) => {
    setCurrentModalInform(() => item);
    setModal(true);
  };

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     let result = await axios.get('/api/v1/fishList/all');
  //     console.log(result);
  //   })();
  // }, []);
  const gotoMain = () => {
    navigator('/');
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
      {/* <div className="fishList_view-grid">
        {data?.map((item, index) => {
          return (
            <div
              onClick={() => showDetailFish(item)}
              className="fishList_view-card"
            >
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className="fishList_view-img"
              ></div>
            </div>
          );
        })}
      </div> */}
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
