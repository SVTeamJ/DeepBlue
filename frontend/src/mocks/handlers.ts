import { rest } from 'msw';
/**
 fish type
 toxicity
 closed_season
 description
 img 
 */

export interface fishInform {
  fish_type: string;
  toxicyty: string;
  image: string;
  closed_season: string;
  description: string;
}

export interface fishResult {
  fish_type: string;
  toxicity: string;
  open_season: string;
  closed_season: string;
  description: string;
}

const fishList: fishInform[] = [
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image:
      'https://mblogthumb-phinf.pstatic.net/20160711_100/fira_sea_1468227329810rnH0d_JPEG/14217905533_97401254aa_b.jpg?type=w2',
    closed_season: '3월 22일 ~ 6월 33일',
    description: '갈치 아닌데요?',
  },
  {
    fish_type: '노랑가오리',
    toxicyty: 'O',
    image:
      'https://i.ytimg.com/vi/3DuYQz9-xrQ/maxresdefault.jpg',
    closed_season: '5월 8월',
    description: '노랑가오리는 색가오리과에 속하는 물고기로꼬리에 긴 독가시가 하나 있는데 길이가 약 15cm 이기 때문에 매우 기다란 것 뿐만 아니라 양쪽에 톱니가 있어 인간의 몸을 찌르면몹시 아플 뿐만 아니라 독가시 끝에 맹독이 있어 기절하고 심지어 사망하는 수도 있다',
  },
];

export const handlers = [
  rest.get('/api/v1/fishList/all', (req, res, ctx) => {
    console.log('호출됨');
    console.log(fishList);
    return res(ctx.status(200), ctx.json(fishList));
  }),
];
