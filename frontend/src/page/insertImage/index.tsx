import Nav from '@/components/nav';
import React, { useEffect, useRef, useState } from 'react';
import download from '@/assets/download.png';
import smallFish from '@/assets/smallFish.png';
import seaweeds from '@/assets/seaweeds.png';
import './index.scss';
const InsertImage = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [imagefile, setImageFile] = useState<File>();
  const [preview, setPreview] = useState<string>('');

  //이미지 클릭시 file선택창이 나오게하는 함수
  const openFile = () => {
    imageRef.current?.click();
  };

  //이미지를 올리고 저장해주는 함수
  const raiseImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target?.files[0];
      setImageFile(file);
      const formData = new FormData();
      formData.append('img', file);
    }
  };

  //파일이 바뀔떄마다 preview데이터를 바꿔주는 훅
  useEffect(() => {
    if (imagefile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(imagefile);
    }
  }, [imagefile]);

  return (
    <div className="img-view">
      <Nav />
      <div className="insertImage-view">
        <div className="insert_box">
          <div onClick={openFile} className="insert_picture">
            {preview && (
              <div>
                <img className="insert_picture-previewImg" src={preview}></img>
              </div>
            )}
            {!preview && (
              <>
                <img className="insert_picture-img" src={download} />
                <p>이곳을 클릭하거나 사진을 올려주세요 !</p>
              </>
            )}
          </div>
          <input
            onChange={raiseImg}
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
