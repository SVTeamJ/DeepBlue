from .expect import fish_detect
from fastapi import File, UploadFile
from fastapi import APIRouter, Depends
from .aws.bucket import *
import pymysql 

router = APIRouter()


@router.post("/")
async def infer(file: UploadFile = File()):
    content = await file.read()
    filename = f"{file.filename}.jpg"
    with open(filename, "wb") as fp:
        fp.write(content)
        post_bucket(content,filename)

    url = "https://svj-deepblue.s3.ap-northeast-2.amazonaws.com/" + filename 
    result = fish_detect(filename)
    conn = pymysql.connect(host='mysql', port=3306, user='taegong', password='taegong', db='taegong', charset='utf8') 
    cursor = conn.cursor() 
    sql = "SELECT * FROM fish where fish_id = {}".format(result) 
    cursor.execute(sql) 
    res = cursor.fetchone()
    result = {"model": res[0], 
              "type": res[1],
              "toxicity": res[2],
              "classification": res[3],
              "scientific_name": res[4],
              "close_season": res[5], 
              "description": res[6],
              "habitat": res[7], 
              "image_url": url} 
    conn.commit() 
    conn.close() 
    return result
