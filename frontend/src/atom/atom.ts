import { User } from '@/components/signup';
import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist({
  key: 'USER',
  storage: localStorage,
});

export const UUid = atom<User>({
  key: 'user',
  default: {
    name: '',
    username: '',
    password1: '',
    password_check: '',
    id: '',
  },
  effects_UNSTABLE: [persistAtom],
});
