from pydantic import BaseModel

class FishBase(BaseModel):
    
    
     class Config:
        orm_mode=True
    
    
    

class FishCreate(FishBase):
    description:str
    toxicity:str
    fish_type:str
    open_season:str
    closed_season:str
    fish_url:str
    fish_name:str
    fish_habitat:str
    fish_scientific_name:str
    
class FishRead(FishCreate):
    fish_id:int
    
        