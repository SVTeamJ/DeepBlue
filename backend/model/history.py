from sqlalchemy import Boolean, Column,Integer, String,ForeignKey
from sqlalchemy.types import TIMESTAMP
from sqlalchemy.sql import text, func
from database import Base
from model.user import User
from model.fish import Fish
from sqlalchemy.orm import relationship 


class History(Base):
    __tablename__="history"
    
    history_id=Column(Integer,nullable=False,primary_key=True)
    fish_url=Column(String(100),nullable=False,index=True)
    fish_name=Column(String(100),nullable=False,index=True)
    user_id=Column(Integer,ForeignKey("users.id"))
    fish_id=Column(Integer,ForeignKey("fish.fish_id"))
    created_at=Column(TIMESTAMP,server_default=func.now())
    updated_at=Column(TIMESTAMP,server_default=text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
    is_deleted=Column(Boolean,default=False,nullable=False)
    fish=relationship("Fish",backref="history")
    user=relationship("User",backref="history")
    
    
    