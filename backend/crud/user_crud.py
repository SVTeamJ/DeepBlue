from model import user
from schemas import user_schema

from fastapi import Response
from sqlalchemy.orm import Session
from starlette import status


SECRET_KEY = "DeepBlue" # 비밀키


def get_user(db: Session, user_id: int):
    '''
    특정 유저 조회를 위해 사용하는 user_id로 유저 객체 반환

    parameter
    ---------
    db: Session
    user_id: 특정 유저를 불러올 때 입력받는 user_id

    return
    ------
    입력받은 id값과 일치하는 유저 객체 반환
    '''
    return db.query(user.User).filter(user.User.id == user_id).first()

후
def get_user_by_username(db: Session, username: str):
    '''
    로그인 유효성 검사를 위해 사용하는 username으로 유저 객체 반환

    parameter
    ---------
    db: Session
    username: 로그인 시 입력받는 username

    return
    ------
    입력받은 username값과 일치하는 유저 객체 반환
    '''
    return db.query(user.User).filter(user.User.username == username).first()


def get_user_by_username_and_password(db: Session, username: str, password: str):
    '''
    로그인 유효성 검사를 위해 사용하는 username과 passowrd로 유저 객체 반환

    parameter
    ---------
    db: Session
    username: 로그인 시 입력하는 username
    passoword: 로그인 시 입력하는 password

    return
    ------
    입력받은 username값과 password값이 일치하는 유저 객체 반환
    '''
    return db.query(user.User).filter((user.User.username == username) & (user.User.password == hash_password(password))).first()


def hash_password(password: str):
    '''
    입력받은 password를 hash처리

    parameter
    ---------
    password: 로그인 시 입력하는 password

    return
    ------
    hash처리한 password
    '''
    password = password + SECRET_KEY
    return password


def get_users(db: Session, skip: int = 0, limit: int = 100):
    '''
    skip으로 시작하여 limit 수 만큼의 유저 객체 반환

    parameter
    ---------
    db: Session
    skip: 불러올 유저 순서
    limit: skip으로부터 불러올 유저 수

    return
    ------
    skip에서 시작하여 limit 수 만큼의 유저 객체 반환
    '''
    return db.query(user.User).offset(skip).limit(limit).all()


def create_user(db: Session, user_: user_schema.UserCreate):
    '''
    유저 생성

    parameter
    ---------
    db: Session
    user_: UserCreate 스키마

    return
    ------
    hash처리된 password가 들어간 유저 데이터
    '''
    hashed_password = get_password_hash(user_.password1)
    db_user = user.User(name=user_.name, username=user_.username, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_password_hash(password):
    '''
    password hash처리

    parameter
    ---------
    회원가입 시 입력받은 password

    return
    ------
    비밀키를 이용하여 hash처리된 password
    '''
    return password + SECRET_KEY


def delete_user_by_id(db: Session, user_id: int):
    '''
    유저 삭제

    parameter
    ---------
    db: Session
    user_id : 유저 삭제 시 입력받는 user_id

    return
    ------
    유저 삭제(입력받은 user_id와 일치하는 유저의 is_active값을 False로 설정) 후 상태코드 204 반환
    '''
    user_ = db.query(user.User).filter(user.User.id == user_id).update({"is_active": False})
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)