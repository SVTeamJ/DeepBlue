from pydantic import BaseModel

class HistoryBase(BaseModel):
     class Config:
        orm_mode = True

class HistoryCreate(HistoryBase):
    fish_url:str
    fish_id:int


# class HistoryRead(HistoryBase):
#     fish_id:int
#     fish_url:str
#     fish_name:str
#     user_id:int

class HistoryList(HistoryBase):
   
    fish_type: str
    scientific_name: str
    description: str
    classification: str
    habitat: str
    toxicity: str
    closed_season: str
    fish_url: str
    
    
    
    
    
    
    
    
    
    
    
    

    