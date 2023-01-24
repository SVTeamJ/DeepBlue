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

# @router.post("/")
# def post_history(history:history_schema.create_History,
#                 db:Session=Depends(get_db)):
#
#     return history_crud.create_history(db,history)


@router.get("/{user_id}",response_model=list[history_schema.read_History])
def get_history(user_id:int,
                db:Session=Depends(get_db)
#                token:str=Depends(oauth2_scheme)
):

    #history_user_id=history_crud.get_current_user(db,token,user_id)
    return history_crud.get_history(db,user_id)

