from sqlalchemy import Boolean, Column,Integer, String
from sqlalchemy.types import TIMESTAMP,DateTime
from sqlalchemy.sql import text, func


from database import Base
from sqlalchemy import func

class Fish(Base):
    __tablename__="fish"
    
    fish_id=Column(Integer,primary_key=True,index=True)
    fish_type=Column(String(64),nullable=False,index=True)
    toxicity=Column(String(16),nullable=False,index=True)
    open_season=Column(String(64),nullable=False,index=True)
    closed_season=Column(String(64),nullable=False,index=True)
    description=Column(String(255),nullable=False,index=True)
    fish_url=Column(String(100),nullable=False,index=True)
    created_at=Column(TIMESTAMP,server_default=func.now())
    updated_at=Column(TIMESTAMP,server_default=text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
    is_active=Column(Boolean,nullable=False,default=True)
    
  