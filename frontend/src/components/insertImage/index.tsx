import Nav from '@/components/nav';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Loading from '../loading';
import download from '@/assets/download.png';
import './index.scss';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
const InsertImage = () => {
  const navigate = useNavigate();
  const imageRef = useRef<HTMLInputElement>(null);
  const [imagefile, setImageFile] = useState<File>();
  const [preview, setPreview] = useState<string>('');

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    (formData: FormData) => {
      return restFetcher({
        method: 'POST',
        path: 'http://localhost:8000/api/ai',
        body: formData,
      });
    },
  );

  //이미지 클릭시 file선택창이 나오게하는 함수
  const openFile = () => {
    imageRef.current?.click();
  };

  const sendImage = () => {
    if (!imagefile) {
      alert('먼저 사진을 업로드해주세요 !');
      return;
    }
    const formData = new FormData();
    formData.append('image', imagefile);
    mutate(formData, {
      onSuccess: (data) =>
        navigate('/result', {
          state: {
            data,
          },
        }),
    });
    //formData를 post요청 => 성공한다면 result페이지로 이동
  };

  //이미지를 올리고 저장해주는 함수
  const raiseImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target?.files[0];
      console.log(file);
      setImageFile(file);
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

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImageFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop,
  });

  return (
    <>
      <div className="insert_box">
        <div {...getRootProps()} onClick={openFile} className="insert_picture">
          {isLoading ? (
            <Loading />
          ) : preview ? (
            <div>
              <img className="insert_picture-previewImg" src={preview}></img>
            </div>
          ) : (
            <>
              <img className="insert_picture-img" src={download} />
              <p>이곳을 클릭하거나 사진을 올려주세요 !</p>
            </>
          )}
        </div>
        <input
          {...getInputProps()}
          onChange={raiseImg}
          ref={imageRef}
          type="file"
          // accept="image/*"
          className="hidden"
        ></input>
      </div>
      <div onClick={sendImage} className="insert_search">
        검색
      </div>
    </>
  );
};

export default InsertImage;
