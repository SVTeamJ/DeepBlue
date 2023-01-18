from pydantic import BaseModel

class FishBase(BaseModel):
    
    
     class Config:
        orm_mode=True
    
    
    
    
class Fish(FishBase):
    fish_id:int
    description:str
    toxicity:str
    fish_type:str
    open_season:str
    closed_season:str
    fish_url:str
    is_active:bool
    
    

class FishCreate(FishBase):
    fish_id:int
    description:str
    toxicity:str
    fish_type:str
    open_season:str
    closed_season:str
    fish_url:str
    
class FishRead(FishCreate):
    fish_id:int
    
        