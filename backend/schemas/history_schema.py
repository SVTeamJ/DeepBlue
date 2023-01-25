from pydantic import BaseModel

class HistoryBase(BaseModel):
     class Config:
        orm_mode = True

class HistoryCreate(HistoryBase):
    fish_id:int
    fish_url:str
    fish_name:str
    user_id:int

class HistoryRead(HistoryBase):
    fish_id:int
    fish_url:str
    fish_name:str

class HistoryList(HistoryBase):
    user_id:int
    fish_id:int
    fish_url:str
    fish_name:str
    description: str
    toxicity: str
    fish_type: str
    open_season: str
    closed_season: str
    fish_url: str
    habitat: str
    scientific_name: str
    classification: str
    

    