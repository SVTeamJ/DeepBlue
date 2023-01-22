import { User } from '@/components/signup';
import { atom } from 'recoil';

export const UUid = atom<User>({
  key: 'user',
  default: { name: '', username: '', password1: '', password_check: '' },
});
