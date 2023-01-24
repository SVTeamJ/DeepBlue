from sqlalchemy.orm import Session
from schemas import history_schema
from model.history import History
from model.fish import Fish
from model.user import User
from starlette import status



'''
 데이터 베이스에 History 모델 추가


'''


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
    
    '''
    유저의 history불러오기 위해 user_id로 history객체 여러개 반환
    
    parameter
    ---------
    db:Session
    user_id:특정 유저의 history를 불러올 때 입력받는 user_id
    
    return
    --------
    user_id가진 history 전부
    '''
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
    