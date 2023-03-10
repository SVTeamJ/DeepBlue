from fastapi import APIRouter,Depends
from database import SessionLocal
from api.dep import get_db
from sqlalchemy.orm import Session
from schemas import history_schema
from model import history
from crud import history_crud
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/user/login")

router=APIRouter()

@router.post("/{user_id}", response_model=history_schema.HistoryCreate)
def post_history(user_id:int,
                history:history_schema.HistoryCreate,
                db:Session=Depends(get_db)):
    return history_crud.create_history(user_id,db,history)



'''
user_id 통해서 
user_id가진 모델 모두 불러 온 후
리스트 형식으로 반환

'''


@router.get("/{user_id}",response_model=list[history_schema.HistoryList])
def get_history(user_id:int,
                db:Session=Depends(get_db)):
    return history_crud.get_history(db,user_id)

