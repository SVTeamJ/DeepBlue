from models import User
from schemas import user_schema
from fastapi import Response, HTTPException
from sqlalchemy.orm import Session
from starlette.responses import Response
from starlette.status import HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED


# user
# id로 user 검색
def get_user_by_token(db: Session, token: str):
    username = (
        db.query(User)
        .filter(User.is_active == True)
        .filter(User.token == token)
        .first()
    )
    if not username:
        return Response(status_code=HTTP_401_UNAUTHORIZED)
    return username


# user 생성
def create_user(db: Session, user: user_schema.UserCreate):
    existing_user = (
        db.query(User)
        .filter(User.username == user.username)
        .first()
    )
    if existing_user:
        db_user = (
            db.query(User)
            .filter(User.id == existing_user.id)
            .update({"token": user.token})
        )
        db.commit()
        return db.query(User).filter(User.id == existing_user.id).first()
    db_user = User(
        name=user.name,
        username=user.username,
        password = user.password,
        token=user.token
    )
    db.add(db_user)
    db.commit()
    return db_user


# user 삭제
def delete_user_by_id(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).update({"is_active": False})
    db.commit()
    return Response(status_code=HTTP_204_NO_CONTENT)