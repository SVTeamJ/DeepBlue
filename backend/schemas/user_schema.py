from pydantic import BaseModel, validator


class UserBase(BaseModel):
    name: str
    username: str


class User(UserBase):
    id: int
    is_active: bool
    password: str

    class Config:
        orm_mode = True


class UserCreate(UserBase):
    name: str
    password1: str
    password_check: str

    @validator('name', 'username', 'password1', 'password_check')
    def not_empty(cls, v):
        '''
        name, username, password1, password_check에 빈 칸이 있는지 확인

        parameter
        ---------
        값

        return
        ------
        없으면:
            ValueError
        있으면:
            값 반환
        '''
        if not v:
            raise ValueError("모든 값을 입력해야 합니다.")
        return v

    @validator('password_check')
    def password_match(cls, v, values):
        '''
        password1과 password1이 일치하는지 확인

        parameter
        ---------
        값

        return
        ------
        일치하지 않으면:
            ValueError
        일치하면:
            값 반환
        '''
        if 'password1' in values and v != values['password1']:
            raise ValueError("비밀번호가 일치하지 않습니다.")
        return v