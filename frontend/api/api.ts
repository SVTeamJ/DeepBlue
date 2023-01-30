import axios from 'axios';
import { User } from '../src/components/signup';
import { Storge } from '../src/page/result';
import { aiType } from '../src/type/result';

const BASE_URL = import.meta.env.DEV
  ? 'http://localhost:8000/api'
  : 'http://www.deepblue3.shop:8000/api';

interface result extends aiType {
  image_url: string;
}

interface resultType extends aiType {
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
