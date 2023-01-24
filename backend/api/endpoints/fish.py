from fastapi import APIRouter,Depends
from database import SessionLocal

from schemas import fish_schema
from crud import fish_crud
from sqlalchemy.orm import Session
from model import fish
from api.dep import get_db
        
router=APIRouter()



@router.post("/",response_model=fish_schema.FishRead)
def post_fish(fish:fish_schema.FishCreate,db:Session=Depends(get_db)):
    fish_crud.create_fish(db,fish)
    return fish_crud.create_fish(db,fish)

    
    
@router.get("/{fish_id}",response_model=fish_schema.FishRead)
def get_fish(fish_id:int,db:Session=Depends(get_db)):
    return fish_crud.get_fish(db,fish_id)
    
   