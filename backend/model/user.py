from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.types import TIMESTAMP
from sqlalchemy.sql import text, func

from database import Base
from sqlalchemy import func


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(32), nullable=False, index=True) # 실명
    username = Column(String(32), unique=True, nullable=False, index=True) # 아이디
    password = Column(String(32), nullable=False, index=True) # 비밀번호
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(
        TIMESTAMP, server_default=text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    )
    is_active = Column(Boolean, nullable=False, default=True)