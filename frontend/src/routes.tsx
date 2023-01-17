import React, { lazy } from 'react';
import InsertImage from './components/insertImage';
import GlobalLayout from './page/_layout';

const Main = lazy(() => import('./page/main'));
const Result = lazy(() => import('./page/result'));
const Storage = lazy(() => import('./page/storage'));
export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Main />, index: true },
      { path: '/result', element: <Result />, index: true },
      { path: '/storage', element: <Storage></Storage>, index: true },
    ],
  },
];

export const pages = [{ route: '/' }, { route: '/result' }];
