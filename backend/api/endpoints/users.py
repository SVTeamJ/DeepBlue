from typing import List
from datetime import timedelta

from schemas import user_schema
from crud import user_crud

from fastapi import Depends, APIRouter, HTTPException
from sqlalchemy.orm import Session
from starlette import status
from api.dep import get_db


router = APIRouter()


@router.post("/signup", response_model=user_schema.User)
def create_user(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    '''
    회원가입 API

    return
    ------
    입력받은 username을 사용하는 유저가 있을 경우:
        상태코드 400
    없을 경우:
        유저 데이터 저장
    '''
    db_user = user_crud.get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="이미 존재하는 아이디 입니다.")
    return user_crud.create_user(db=db, user_=user)


@router.get("", response_model=List[user_schema.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    '''
    설정 범위 내의 유저 조회 API
    '''
    users = user_crud.get_users(db, skip=skip, limit=limit)
    return users


@router.get("/{user_id}", response_model=user_schema.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    '''
    입력한 user_id와 일치하는 유저 조회 API

    return
    ------
    없을 경우:
        상태코드 404
    있을 경우:
        유저 반환
    '''
    db_user = user_crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="사용자를 찾을 수 없습니다.")
    return db_user


@router.post("/login")
def user_login(username: str, password: str, db: Session = Depends(get_db)):
    '''
    로그인 API

    return
    ------
    입력받은 username이 없을 경우:
        잘못된 아이디임을 알려줌
    username은 있지만 그 username에 대한 password가 다를경우:
        잘못된 비밀번호임을 알려줌
    제대로 입력했을 경우:
        access_token 생성
    '''
    user_ = user_crud.get_user_by_username(db, username=username)
    user__=user_crud.get_user_by_username_and_password(db, username=username ,password=password)
    if user_ is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="잘못된 아이디 입니다.",
            headers={"WWW-Authenticate": "Bearer"}
        )
    elif user__ is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="잘못된 비밀번호 입니다.",
            headers={"WWW-Authenticate": "Bearer"}
        )
    
    access_token_expires = timedelta(minutes=user_crud.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = user_crud.create_access_token(data = {"sub": username}, expires_delta = access_token_expires)
    
    return {
        "access_token": access_token,
        "token_type": "Bearer",
        "username": username
    }



@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user_by_id(user_id: int, db: Session = Depends(get_db)):
    '''
    유저 삭제 API
    '''
    user_crud.delete_user_by_id(db, user_id=user_id)