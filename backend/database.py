from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

import os
# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db" #host.doc
# 
# ker.internal 외부에서 도커에 접속하기 위한 주소
if os.getenv('MYSQL_HOST'):
    SQLALCHEMY_DATABASE_URL = "mysql+pymysql://taegong:taegong@host.docker.internal:3306/taegong"
else:
    SQLALCHEMY_DATABASE_URL = "mysql+pymysql://taegong:taegong@localhost:3306/taegong"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    # connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


Base = declarative_base()
