import React, { useEffect } from 'react';
import './index.scss';
import Nav from '@/components/nav';
import InsertImage from '@/components/insertImage';
import shark from '@/assets/shark.jpg';
import crucian from '@/assets/crucian.jpg';
import turtle from '@/assets/turtle.jpg';
import jellyfish from '@/assets/jellyfish.jpg';
import { useRecoilValue } from 'recoil';
import { User } from '@/components/signup';
import { UUid } from '@/atom/atom';

const Main = () => {
  const userInform = useRecoilValue<User>(UUid);
  useEffect(() => {
    console.log(userInform);
  }, []);
  return (
    <div>
      <div className="main_background">
        <Nav></Nav>
        <div className="main_center">
          <div className="main_introduce">
            <h1>Upload fish Photo!</h1>
            <p>
              When you uploading your fish photo,
              <br /> we'll show you about fish informations.
            </p>
          </div>
          <div className="main_insertPicture">
            <InsertImage />
          </div>
        </div>
        <div className="main_exam-pictures">
          <img src={shark}></img>
          <img src={crucian}></img>
          <img src={turtle}></img>
          <img src={jellyfish}></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
