from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from starlette.status import HTTP_201_CREATED, HTTP_204_NO_CONTENT
from crud import user_crud
from schemas import user_schema
from api.dep import get_db

router = APIRouter()


# TODO: 에러 처리

# 유저 생성
@router.post("", status_code=HTTP_201_CREATED, response_model=user_schema.User)
def create_user_info(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    user_ = user_crud.create_user(db, user=user)
    return user_


# 유저 상세 조회
@router.get("/{token}")
def get_user_by_id(token: str, db: Session = Depends(get_db)):
    users = user_crud.get_user_by_token(db, token=token)
    return users


# 유저 삭제
@router.delete("/{user_id}", status_code=HTTP_204_NO_CONTENT)
def delete_user_by_id(user_id: int, db: Session = Depends(get_db)):
    user_crud.delete_user_by_id(db, user_id=user_id)