from pydantic import BaseModel


class UserBase(BaseModel): 
    class Config:
        orm_mode = True


class User(UserBase):
    id: int
    name: str
    username: str
    password: str
    token: str
    is_active: bool



class UserCreate(UserBase):
    name: str
    username : str
    password: str
    token: str


class UserRead(UserCreate):
    id: int


class UserDelete(UserBase):
    is_active: bool