from model import User
from schemas import user_schema
from fastapi import Response
from sqlalchemy.orm import Session
from starlette.responses import Response
from starlette.status import HTTP_204_NO_CONTENT
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_user_by_uername(db: Session, username: str):
    '''
    ID로 User데이터를 가져와서 비밀번호를 비교하기 위한 메소드

    parameters
    ----------
    db: Session
    username: str

    return
    ------
    ID로 사용자 모델 객체 리턴
    '''
    return db.query(User).filter(User.username == username).first()


def create_user(db: Session, user: user_schema.UserCreate):
    db_user = User(
        name=user.name,
        username=user.username,
        password = pwd_context.hash(user.password)
    )
    db.add(db_user)
    db.commit()
    return db_user


def existing_user(db: Session, user: user_schema.UserCreate):
    '''
    동일한 ID로 등록된 사용자가 있는지 조회

    parameters
    ----------
    db: Session
    user: user_schema.UserCreate

    return
    ------
    ID로 사용자 모델 객체 리턴
    '''
    return db.query(User).filter(User.username == user.username).first()


def delete_user_by_id(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).update({"is_active": False})
    db.commit()
    return Response(status_code=HTTP_204_NO_CONTENT)