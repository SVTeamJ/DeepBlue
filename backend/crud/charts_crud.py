from sqlalchemy.orm import Session
from model.history import History
from model.fish import Fish
from sqlalchemy import func

def get_charts(db: Session):
    """
    차트 정보 불러오는 API
    :param db:
    :return: fish_type, count(fish_id)
    """
    return db.query(Fish.fish_type,func.count(History.fish_id)).group_by(History.fish_id).join(Fish,History.fish_id == Fish.fish_id)
