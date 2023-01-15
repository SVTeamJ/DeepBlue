from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.types import TIMESTAMP
from sqlalchemy.sql import text, func

from database import Base
from sqlalchemy import func


class Fish(Base):
    __tablename__ = "fish"
    id = Column(Integer, primary_key=True, index=True)
    fish_type = Column(String(100), nullable=False, default=True)
    toxicity = Column(String(20))
    open_season = Column(TIMESTAMP, nullable=False)
    closed_season = Column(TIMESTAMP, nullable=False)
    description = Column(String(300), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(
        TIMESTAMP, server_default=text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    )



