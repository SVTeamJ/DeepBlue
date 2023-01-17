from .expect import fish_detect
from fastapi import File, UploadFile
from fastapi import APIRouter, Depends

import json 

router = APIRouter()



@router.post("/")
async def infer(file: UploadFile = File()):
    content = await file.read()
    filename = f"{file.filename}.jpg"
    with open(filename, "wb") as fp:
        fp.write(content)

    result = fish_detect(filename)
    with open("api/endpoints/data.json", 'r') as file:
        fish_data = json.load(file)
        for data in fish_data:
            if data["pk"] == result:
                return data


        
    
    