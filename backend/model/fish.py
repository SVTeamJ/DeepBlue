from sqlalchemy import Boolean, Column,Integer, String
from sqlalchemy.types import TIMESTAMP,DateTime
from sqlalchemy.sql import text, func

from database import Base
from sqlalchemy import func

class Fish(Base):
    __tablename__="fish"
    
    fish_id=Column(Integer,primary_key=True,index=True)

    fish_type=Column(String(64),nullable=False,index=True)
    scientific_name=Column(String(128),nullable=False,index=True)
    classification = Column(String(64), nullable=False, index=True)
    description = Column(String(512), nullable=False, index=False)
    habitat = Column(String(64), nullable=False, index=False)

    toxicity=Column(String(16),nullable=False,index=False)
    open_season=Column(String(64),nullable=False,index=False)
    closed_season=Column(String(64),nullable=False,index=False)
    fish_url=Column(String(100),nullable=False,index=False)

    created_at=Column(TIMESTAMP,server_default=func.now())
    updated_at=Column(TIMESTAMP,server_default=text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
    is_active=Column(Boolean,nullable=False,default=False)
    
  