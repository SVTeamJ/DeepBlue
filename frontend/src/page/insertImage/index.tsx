import Nav from '@/components/nav';
import React, { useRef } from 'react';
import download from '../../assets/download.png';
import './index.scss';
const InsertImage = () => {
  const imageRef = useRef<HTMLInputElement>(null);

  const openFile = () => {
    imageRef.current?.click();
  };

  return (
    <div className="img-view">
      <Nav />
      <div className="insertImage-view">
        <div className="insert_box">
          <div onClick={openFile} className="insert_picture">
            <img className="insert_picture-img" src={download} />
            <p>이곳을 클릭하거나 사진을 올려주세요 !</p>
          </div>
          <input
            ref={imageRef}
            type="file"
            accept="image/*"
            className="hidden"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default InsertImage;
