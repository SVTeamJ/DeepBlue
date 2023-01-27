import axios from 'axios';
import { User } from '../src/components/signup';
import { Storge } from '../src/page/result';
import { aiType } from '../src/type/result';

interface result extends aiType {
  image_url: string;
}

export async function post_storge(resultData: result, user: User) {
  const body: Storge = {
    fish_url: resultData.image_url,
    fish_id: resultData.model,
  };
  await axios.post(`http://localhost:8000/api/history/${user.id}`, body);
}

export function get_storage(user: User) {
  return axios.get(`http://localhost:8000/api/history/${user.id}`);
}
