from fastapi import APIRouter
from api.endpoints import users, ai,fish,history, charts

api_router = APIRouter()
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(ai.router, prefix="/predictions", tags=["predictions"])
api_router.include_router(history.router, prefix="/history",tags=["history"])
api_router.include_router(fish.router, prefix="/fish",tags=["fish"])
api_router.include_router(charts.router, prefix="/charts",tags=["charts"])