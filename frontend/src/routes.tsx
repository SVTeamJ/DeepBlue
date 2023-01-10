import React, { lazy } from 'react';
import GlobalLayout from './page/_layout';

const Main = lazy(() => import('./page/main'));
const Result = lazy(() => import('./page/result'));

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Main />, index: true },
      { path: '/result', element: <Result />, index: true },
    ],
  },
];

export const pages = [{ route: '/' }, { route: '/result' }];
