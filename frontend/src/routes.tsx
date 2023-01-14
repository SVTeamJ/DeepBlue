import React, { lazy } from 'react';
import InsertImage from './page/insertImage';
import GlobalLayout from './page/_layout';

const Main = lazy(() => import('./page/main'));
const Result = lazy(() => import('./page/result'));
const FishList = lazy(() => import('./page/fishList'));
export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Main />, index: true },
      { path: '/insert', element: <InsertImage></InsertImage>, index: true },
      { path: '/result', element: <Result />, index: true },
      { path: '/fishList', element: <FishList></FishList>, index: true },
    ],
  },
];

export const pages = [{ route: '/' }, { route: '/result' }];
