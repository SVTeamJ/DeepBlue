from pydantic import BaseModel

class HistoryBase(BaseModel):
     class Config:
        orm_mode = True

class create_History(HistoryBase):
    fish_id:int
    fish_url:str
    fish_name:str
    user_id:int


class read_History(HistoryBase):
    fish_id:int
    fish_url:str
    fish_name:str
    

    
    