from pydantic import BaseModel

class HistoryBase(BaseModel):
    
    
     class Config:
        orm_mode = True
        
        
class create_History(HistoryBase):
    fish_url:str
    fish_name:str
    
    
class read_History(HistoryBase):
    fish_id:int
    fish_url:int
    fish_name:str
    

    
    