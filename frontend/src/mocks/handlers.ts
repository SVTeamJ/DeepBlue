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
      'https://i.pinimg.com/564x/1d/33/60/1d3360a2150f72c280d3392e3ff09cf9.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description: '갈치 아닌데요?',
  },
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image:
      'data:image/jpeg;base64,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',
    closed_season: '3월 22일 ~ 6월 33일',
    description:
      '물고기 또는 어류(魚類)는 척추동물아문에 속하는 동물의 하나이다. 또한 척추동물 중에서 네발동물은 제외된다. 대체적으로 물 속에 살며 아가미로 호흡하며 지느러미로 움직이고 몸 표면이 비늘로 덮여 있는 냉혈동물로 주위 온도에 영향을 받는다.',
  },
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image:
      'https://i.pinimg.com/564x/1d/33/60/1d3360a2150f72c280d3392e3ff09cf9.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description:
      '아가미가 달린 척추동물 무리를 통틀어 일컫는 말. 고유어로는 물고기라고 불린다. 15세기 전후엔 믌고기라 표기했는데 믈+-ㅅ+고기[1]의 형태로 나눠진다. 이후 ㄹ이 사라진 믓고기, ㅅ이 사라진 믈고기 두 형태로 공존했는데 믓고기는 거의 쓰이지 않고 믈고기가 원순모음화[2]를 통해 물고기로 정착하였다. ',
  },
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image: 'http://pds8.egloos.com/pds/200803/04/44/e0080644_47cc8613258f8.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description:
      '척추동물 중에서도 가장 먼저 지구상에 생겨난 가장 기초적인 척추동물로, 옛날에는 연골어류, 경골어류로 나누었으나, 경골어류는 분기분류학이 발달하기 전에 붙여진 이름이다. 현재 지구상에 알려진 어류는 모두 62목, 504과, 25,777종이 존재한다. 뼈의 특징에 따라 연골어강, 조기어강, 육기어강으로 분류된다.',
  },
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image:
      'https://i.pinimg.com/564x/1d/33/60/1d3360a2150f72c280d3392e3ff09cf9.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description:
      '아가미가 달린 척추동물 무리를 통틀어 일컫는 말. 고유어로는 물고기라고 불린다. 15세기 전후엔 믌고기라 표기했는데 믈+-ㅅ+고기[1]의 형태로 나눠진다. 이후 ㄹ이 사라진 믓고기, ㅅ이 사라진 믈고기 두 형태로 공존했는데 믓고기는 거의 쓰이지 않고 믈고기가 원순모음화[2]를 통해 물고기로 정착하였다. ',
  },
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image: 'http://pds8.egloos.com/pds/200803/04/44/e0080644_47cc8613258f8.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description:
      '척추동물 중에서도 가장 먼저 지구상에 생겨난 가장 기초적인 척추동물로, 옛날에는 연골어류, 경골어류로 나누었으나, 경골어류는 분기분류학이 발달하기 전에 붙여진 이름이다. 현재 지구상에 알려진 어류는 모두 62목, 504과, 25,777종이 존재한다. 뼈의 특징에 따라 연골어강, 조기어강, 육기어강으로 분류된다.',
  },
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image:
      'https://i.pinimg.com/564x/1d/33/60/1d3360a2150f72c280d3392e3ff09cf9.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description:
      '아가미가 달린 척추동물 무리를 통틀어 일컫는 말. 고유어로는 물고기라고 불린다. 15세기 전후엔 믌고기라 표기했는데 믈+-ㅅ+고기[1]의 형태로 나눠진다. 이후 ㄹ이 사라진 믓고기, ㅅ이 사라진 믈고기 두 형태로 공존했는데 믓고기는 거의 쓰이지 않고 믈고기가 원순모음화[2]를 통해 물고기로 정착하였다. ',
  },
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image: 'http://pds8.egloos.com/pds/200803/04/44/e0080644_47cc8613258f8.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description:
      '척추동물 중에서도 가장 먼저 지구상에 생겨난 가장 기초적인 척추동물로, 옛날에는 연골어류, 경골어류로 나누었으나, 경골어류는 분기분류학이 발달하기 전에 붙여진 이름이다. 현재 지구상에 알려진 어류는 모두 62목, 504과, 25,777종이 존재한다. 뼈의 특징에 따라 연골어강, 조기어강, 육기어강으로 분류된다.',
  },
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image:
      'https://i.pinimg.com/564x/1d/33/60/1d3360a2150f72c280d3392e3ff09cf9.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description:
      '아가미가 달린 척추동물 무리를 통틀어 일컫는 말. 고유어로는 물고기라고 불린다. 15세기 전후엔 믌고기라 표기했는데 믈+-ㅅ+고기[1]의 형태로 나눠진다. 이후 ㄹ이 사라진 믓고기, ㅅ이 사라진 믈고기 두 형태로 공존했는데 믓고기는 거의 쓰이지 않고 믈고기가 원순모음화[2]를 통해 물고기로 정착하였다. ',
  },
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image: 'http://pds8.egloos.com/pds/200803/04/44/e0080644_47cc8613258f8.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description:
      '척추동물 중에서도 가장 먼저 지구상에 생겨난 가장 기초적인 척추동물로, 옛날에는 연골어류, 경골어류로 나누었으나, 경골어류는 분기분류학이 발달하기 전에 붙여진 이름이다. 현재 지구상에 알려진 어류는 모두 62목, 504과, 25,777종이 존재한다. 뼈의 특징에 따라 연골어강, 조기어강, 육기어강으로 분류된다.',
  },
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image:
      'https://i.pinimg.com/564x/1d/33/60/1d3360a2150f72c280d3392e3ff09cf9.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description:
      '아가미가 달린 척추동물 무리를 통틀어 일컫는 말. 고유어로는 물고기라고 불린다. 15세기 전후엔 믌고기라 표기했는데 믈+-ㅅ+고기[1]의 형태로 나눠진다. 이후 ㄹ이 사라진 믓고기, ㅅ이 사라진 믈고기 두 형태로 공존했는데 믓고기는 거의 쓰이지 않고 믈고기가 원순모음화[2]를 통해 물고기로 정착하였다. ',
  },
  {
    fish_type: '갈치',
    toxicyty: 'yes',
    image: 'http://pds8.egloos.com/pds/200803/04/44/e0080644_47cc8613258f8.jpg',
    closed_season: '3월 22일 ~ 6월 33일',
    description:
      '척추동물 중에서도 가장 먼저 지구상에 생겨난 가장 기초적인 척추동물로, 옛날에는 연골어류, 경골어류로 나누었으나, 경골어류는 분기분류학이 발달하기 전에 붙여진 이름이다. 현재 지구상에 알려진 어류는 모두 62목, 504과, 25,777종이 존재한다. 뼈의 특징에 따라 연골어강, 조기어강, 육기어강으로 분류된다.',
  },
];

export const handlers = [
  rest.get('/api/v1/fishList/all', (req, res, ctx) => {
    console.log('호출됨');
    console.log(fishList);
    return res(ctx.status(200), ctx.json(fishList));
  }),
];
