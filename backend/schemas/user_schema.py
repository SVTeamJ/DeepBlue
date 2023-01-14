from pydantic import BaseModel, validator


class UserBase(BaseModel): 
    class Config:
        orm_mode = True


class User(UserBase):
    id: int
    name: str
    username: str
    password: str
    is_active: bool


class Token(BaseModel):
    '''
    Token 스키마
    로그인 API의 출력 항목인 access_token, token_type, username을 속성으로 함
    '''
    access_token: str
    token_type: str
    username: str


class UserCreate(UserBase):
    name: str
    username: str
    password: str
    password_check: str

    @validator('password_check')
    def password_match(cls, v, values):
        '''
        password와 password_check가 동일한지 확인

        parameters
        ----------
        cls : class 메소드 사용
        v : password_check
        values : UserCreate의 속성들이 {변수명: 값} 형태로 전달

        return
        ------
        password가 UserCreate에 있고 입력된 password_check의 값이 password와 일치하지 않는다면:
            "비밀번호가 일치하지 않습니다"
        일치한다면:
        password
        
        '''
        if 'password' in values and v != values['password']:
            raise ValueError("비밀번호가 일치하지 않습니다")
        return v


class UserRead(UserCreate):
    id: int


class UserDelete(UserBase):
    is_active: bool