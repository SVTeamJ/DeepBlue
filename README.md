# DeepBlue


<img width="100%" height="100%" alt="SA" src="https://user-images.githubusercontent.com/78102507/214868926-ae019641-764a-4e78-a77e-bbed9702f62b.jpg">




<br>

## Introduction

**아직도 궁금한 물고기를 검색하시나요?**

DeepBlue는 검색하지않아도 사진 한장으로 여러분이 원하는 물고기 정보를  찾아줍니다!

여러분이 궁금해하는 깊은 바닷속 정체모를 생물의 사진을 올려보세요! 😆

<br/>

## System Architecture

<img width="817" alt="System Architecture" src="https://user-images.githubusercontent.com/108779533/215868758-0a45c356-240c-4aaa-b323-57d37e59abf1.png">

<br>

## ERD
<img width="1192" alt="ERD" src="https://user-images.githubusercontent.com/108779533/215867817-a63b4dbe-dbc4-4a56-aafb-747bc546b33d.png">


## TECH STACKS

| Frontend | Backend | Monitoring | DevOps |
| --- | --- | --- | --- |
| <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><br><img alt="Recoil" src ="https://img.shields.io/badge/Recoil-0075EB.svg?&style=for-the-badge&logo=Revolut&logoColor=white"/><br><img alt="ReactQuery" src ="https://img.shields.io/badge/ReactQuery-FF4154.svg?&style=for-the-badge&logo=ReactQuery&logoColor=white"/><br> <img alt="TYPESCRIPT" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/><br> <img alt="SASS" src ="https://img.shields.io/badge/Sass-CC6699.svg?&style=for-the-badge&logo=Sass&logoColor=white"/> | <img src="https://img.shields.io/badge/uvicorn-DD0031?style=for-the-badge&logo=Gunicorn&logoColor=white"><br><img src="https://img.shields.io/badge/FastAPi-009688?style=for-the-badge&logo=FastAPi&logoColor=white"><br><img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"><br><img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"><br><img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white"><br><img src="https://img.shields.io/badge/Swagger-85EA2D.svg?style=for-the-badge&logo=Swagger&logoColor=white"> | <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=Grafana&logoColor=white"><br><img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white"> | <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"><br><img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"><br> <img alt="AmazonAWS" src ="https://img.shields.io/badge/AWS-FF9900.svg?&style=for-the-badge&logo=AmazonAWS&logoColor=white"/><br><img alt="GithubActions" src ="https://img.shields.io/badge/GithubActions-2088FF.svg?&style=for-the-badge&logo=GithubActions&logoColor=white"/> |

<br/>
<br/>

## Installation

> Clone Repository

```
git clone https://github.com/SVTeamJ/DeepBlue.git

```

<br>

> Set .env in the docker folder


```
TZ=Asia/Seoul
MYSQL_USER=
MYSQL_ROOT_PASSWORD=
MYSQL_PASSWORD=
MYSQL_HOST=db
MYSQL_PORT=3306
MYSQL_DATABASE=
INSTA_APP_ID=
AWS_ACCESS_KEY_ID=
AWS_SECRET_KEY=
AWS_S3_BUCKET_NAME=
INSTA_APP_SECRET_ID=

```

<br>

> Run deployment env.


```
cd docker/frontend-web/
yarn install
cd ..
docker-compose up --build


```

## View
>login page
<img width="65%" justify="center" src = 'https://user-images.githubusercontent.com/78102507/215954203-1f094a29-b5e4-4d81-b1ba-892be8055d28.gif'/>

>main page & result page & storage page
<img width="65%" justify="center" src = 'https://user-images.githubusercontent.com/78102507/215961748-4d35ee99-8bdc-4979-ae36-fdee6d627f34.gif'/>

>chart page
<img width="65%" justify="center" src = 'https://user-images.githubusercontent.com/78102507/215957667-0bcb699d-514f-47df-9f17-9dd34d673c0e.gif'/>



<br>

