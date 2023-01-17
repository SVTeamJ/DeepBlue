# 실행 방법

## 1. docker 이미지 만들기
docker build -t mysql .
## 2.컨테이너 실행하기
docker run --name mysql -p 3306:3306 mysql
