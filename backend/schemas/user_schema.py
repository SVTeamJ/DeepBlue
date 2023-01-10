from pydantic import BaseModel


class UserBase(BaseModel): 
    class Config:
        orm_mode = True


class User(UserBase):
    id: int
    user_type: int
    name: str
    gender: str
    age_range: str
    phone_num: str
    token: str
    is_active: bool



class UserCreate(UserBase):
    name: str
    gender: str
    age_range: str
    phone_num: str
    user_type: bool
    token: str


class UserRead(UserCreate):
    id: int


class UserDelete(UserBase):
    is_active: bool