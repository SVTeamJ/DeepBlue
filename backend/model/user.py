from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.types import TIMESTAMP
from sqlalchemy.sql import text, func

from database import Base
from sqlalchemy import func


# class User(Base):
#     __tablename__ = "users"

#     id = Column(Integer, primary_key=True, index=True)
#     user_type = Column(Boolean, nullable=False, default=True) # 사용자와 관리자
#     name = Column(String(100), index=True)
#     gender = Column(String(6), index=True)
#     age_range = Column(String(20), index=True)
#     phone_num = Column(String(16), index=True)
#     token = Column(String(255), nullable=False, index=True)
#     is_active = Column(Boolean, nullable=False, default=True)
#     created_at = Column(TIMESTAMP, server_default=func.now())
#     updated_at = Column(
#         TIMESTAMP, server_default=text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
#     )

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