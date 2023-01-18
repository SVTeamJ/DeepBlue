from fastapi import APIRouter,Depends
from database import SessionLocal

from database import SessionLocal,engine,Base
from schemas import fish_schema
from crud import fish_crud
import model
from sqlalchemy.orm import Session
from model import fish
fish.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
router=APIRouter(
    prefix="/api/fish",
)



@router.post("/",response_model=fish_schema.FishCreate)
def post_fish(fish:fish_schema.FishCreate,db:Session=Depends(get_db)):
    fish_crud.create_fish(db,fish)
   # return fish_crud.create_fish(db, fish=fish)

    
    
@router.get("/{fish_id}",response_model=fish_schema.Fish)
def get_fish(fish_id:int,db:Session=Depends(get_db)):
    fish_information=db.query(fish.Fish).filter(fish.Fish.fish_id==fish_id).first()
    return fish_information
    
   