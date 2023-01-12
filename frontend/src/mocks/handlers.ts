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

const fishList: fishInform[] = [
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image:
      'http://health.chosun.com/site/data/img_dir/2015/10/23/2015102301141_0.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description: '이건 갈치입니다',
  },
];

export const handlers = [
  rest.get('/api/v1/fishList/all', (req, res, ctx) => {
    console.log('호출됨');
    console.log(fishList);
    return res(ctx.status(200), ctx.json(fishList));
  }),
];
