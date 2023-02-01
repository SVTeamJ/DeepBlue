import axios from 'axios';
import { User } from '../src/components/signup';
import { Storge } from '../src/page/result';
import { ResultData, ResultData2 } from '../src/type/result';

const BASE_URL = import.meta.env.DEV
  ? 'http://www.deepblue3.shop:8000/api'
  : 'http://localhost:8000/api';

export interface result extends ResultData {
  image_url: string;
}

export interface resultType extends ResultData {
  fish_url: string;
}

export interface resultType2 extends ResultData2 {
  fish_url: string;
}

export async function post_storge(resultData: result, user: User) {
  const body: Storge = {
    fish_url: resultData.image_url,
    fish_id: resultData.model,
  };
  await axios.post(`${BASE_URL}/history/${user.id}`, body);
}

export async function get_storage(user: User): Promise<resultType[]> {
  const res = await axios.get(`${BASE_URL}/history/${user.id}`);
  return res.data;
}
