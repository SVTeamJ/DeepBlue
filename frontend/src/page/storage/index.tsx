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
import { result} from '../result';


async function get_storage(user:any,setData:any) {
  await axios
    .get(`http://localhost:8000/api/history/3`)
    .then((res)=>{
      console.log("1");
      console.log(res.data);
      setData(res.data);
    })
}

const Storage = () => {
  const navigator = useNavigate();
  const [userInform, setUserInform] = useRecoilState<User>(UUid);
  const [modal, setModal] = useState(false);
  const [currentModalInform, setCurrentModalInform] = useState({
    classification: "",
    closed_season: "",
    description: "",
    habitat: "",
    fish_url: "",
    model: "",
    scientific_name: "",
    toxicity: "",
    fish_type: "",
  });

  let token = localStorage.getItem('access_token');
  console.log(userInform.id);
  const user = useRecoilValue(UUid);
  useEffect(()=>{
    get_storage(user,setData)
  },[])

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

  const [data, setData] = useState<result[]|null>();

  

  const showDetailFish = (item: result) => {
    setCurrentModalInform(() => item);
    setModal(true);
  };

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
      <div className="fishList_view-grid">
        {data?.map((item, index) => {
          return (
            <div
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
