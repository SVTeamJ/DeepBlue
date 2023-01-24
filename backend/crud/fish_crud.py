from sqlalchemy.orm import Session
from schemas import fish_schema
from model.fish import Fish

def create_fish(db:Session,fish:fish_schema.FishCreate):
    db_fish=Fish(
        fish_id=fish.fish_id,
        fish_type=fish.fish_type,
        open_season=fish.open_season,
        closed_season=fish.closed_season,
        fish_url=fish.fish_url,
        description=fish.description,
        toxicity=fish.toxicity
    )
    db.add(db_fish)
    db.commit()
    db.refresh(db_fish)
    return db_fish

def get_fish(db:Session,fish_id:int):
    return db.query(Fish).filter(Fish.fish_id==fish_id).first()