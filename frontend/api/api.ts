import axios from 'axios';
import { User } from '../src/components/signup';
import { Storge } from '../src/page/result';
import { aiType } from '../src/type/result';

interface result extends aiType {
  image_url: string;
}

export async function post_storge(data: result, user: User) {
  const body: Storge = {
    fish_url: data.image_url,
    fish_id: data.model,
  };
  return await axios.post('http://localhost:8000/api/history/3', body);
}
