import uuid
from fastapi import FastAPI
from fastapi import UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from database import Base
from database import engine

from api.api import api_router
Base.metadata.create_all(bind=engine)

# cors 
origins = [
    "http://www.deepblue3.shop:8000",
    "http://www.deepblue3.shop:3000",
    "http://www.deepblue3.shop",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8080",
]
app = FastAPI(title="DeepBlue",docs_url="/swagger")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(api_router, prefix="/api")
