import uuid
from fastapi import FastAPI
from fastapi import UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from database import Base
from database import engine

from api.api import api_router
from api.endpoints import fish
Base.metadata.create_all(bind=engine)

# cors 
origins = [
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
app.include_router(fish.router)