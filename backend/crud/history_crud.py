from sqlalchemy.orm import Session
from schemas import history_schema
from model.history import History
from model.fish import Fish
from model.user import User
from fastapi import HTTPException
from starlette import status
from jose import jwt, JWTError

ALGORITHM = "HS256" # jwt 인코딩을 위해 필요한 알고리즘
SECRET_KEY = "DeepBlue" # 비밀키

def create_history(db:Session, history:history_schema.create_History):

    # create fish here
    db_history=History(
        user_id=history.user_id,
        fish_url=history.fish_url,
        fish_name=history.fish_name,
        fish_id=history.fish_id
    )
    db.add(db_history)
    db.commit()
    return db_history
    
def get_history(db:Session,user_id:int):
    # credentials_exception = HTTPException(
    #     status_code=status.HTTP_401_UNAUTHORIZED,
    #     detail="Could not validate credentials",
    #     headers={"WWW-Authenticate": "Bearer"},
    # )
    # try:
    #     payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    #     username: str = payload.get("sub")
    #     if username is None:
    #         raise credentials_exception
    # except JWTError:
    #     raise credentials_exception
    # else:
    #     user=db.query(User).filter(User.name==username).first()
    #     user_id=user.id
    #     return user_id

    return db.query(History).filter(History.user_id == user_id).all()
    