from datetime import timedelta, datetime

from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from jose import jwt
from sqlalchemy.orm import Session

from starlette.status import HTTP_201_CREATED, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED, HTTP_409_CONFLICT
from crud import user_crud
from crud.user_crud import pwd_context
from schemas import user_schema
from api.dep import get_db

router = APIRouter()

ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 # 토큰의 유효기간
SECRIT_KEY = "bf7c0f28771c1acb9f2da15b0eaf1a76273fd4cf366af0f7fd0e85b079741237" # 암호화시 사용
ALGORITHM = "HS256" # 토큰 생성시 사용하는 알고리즘

@router.post("/create", status_code=HTTP_201_CREATED, response_model=user_schema.User)
def create_user_info(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    '''
    회원가입 API
    user_crud의 existing_user 메소드를 호출하여 사용자가 존재하는지 확인하는 변수 exist_user 생성

    parameters
    ----------
    user: user_schema.UserCreate
    db: Session = Depends(get_db)

    return
    ------
    사용자가 존재한다면:
        상태코드 409, "이미 존재하는 사용자입니다"
    존재하지 않는다면:
        사용자 생성 후 new_user 리턴

    '''
    exist_user = user_crud.existing_user(db, create_user_info=user)
    if exist_user:
        raise HTTPException(status_code=HTTP_409_CONFLICT, detail="이미 존재하는 사용자입니다.")
    new_user = user_crud.create_user(db, user=user)
    return new_user

@router.post("/login", response_model=user_schema.Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    '''
    로그인 API
    ID를 사용하여 사용자 모델 객체를 가져오는 변수 user 생성
    jwt를 사용하여 access_token 생성

    return
    ------
    user가 아니거나 비밀번호가 일치하지 않을경우:
        HTTPException
    일치할 경우:
        json값 반환
    '''
    user = user_crud.get_user_by_username(db, form_data.username)
    if not user or not pwd_context.verify(form_data.password, user.password):
        raise HTTPException(
            status_code=HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    data = {
        "sub": user.username,
        "exp": datetime.utcow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    }
    access_token = jwt.encode(data, SECRIT_KEY, algorithm=ALGORITHM)

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "username": user.username
    }


# 유저 삭제
@router.delete("/{user_id}", status_code=HTTP_204_NO_CONTENT)
def delete_user_by_id(user_id: int, db: Session = Depends(get_db)):
    user_crud.delete_user_by_id(db, user_id=user_id)