from sqlalchemy.orm import Session
from schemas import fish_schema
from model.fish import Fish






'''

Fish모델에 데이터들 넣은 후

모델 리턴

'''
# def create_fish(db:Session,fish:fish_schema.FishCreate):
#     db_fish=Fish(
#         fish_type=fish.fish_type,
#         open_season=fish.open_season,
#         closed_season=fish.closed_season,
#         fish_url=fish.fish_url,
#         description=fish.description,
#         toxicity=fish.toxicity,
#         fish_name=fish.fish_name,
#         habitat=fish.habitat,
#         scientific_name=fish.scientific_name,
#         classication=fish.classification
        
#     )
#     db.add(db_fish)
#     db.commit()
#     db.refresh(db_fish)
#     return db_fish



def get_fish(db:Session,fish_id:int):
    '''
    물고기 정보를 불러오기 위해 fish_id로 물고기 정보 반환
    
    parameter
    ------------
    db:Session
    fish_id:특정 물고기를 불러올때 입력받는 fish_id
    
    return
    ----------
    fish_id 가진 물고기 객체 반환
    '''
    return db.query(Fish).filter(Fish.fish_id==fish_id).first()

