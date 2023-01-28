from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api.dep import get_db
from crud import charts_crud
router = APIRouter()

@router.get("/" )
def get_charts(db:Session=Depends(get_db)):
    """
    차트 정보 불러오는 API
    :param db: 데이터 베이스 세션
    :return: fish_type, count(fish_id)
    """
    return charts_crud.get_charts(db)