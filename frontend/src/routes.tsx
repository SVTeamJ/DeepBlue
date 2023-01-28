import React, { lazy } from 'react';
import InsertImage from './components/insertImage';
import GlobalLayout from './page/_layout';

const Main = lazy(() => import('./page/main'));
const Login = lazy(() => import('./page/login'));
const Result = lazy(() => import('./page/result'));
const Storage = lazy(() => import('./page/storage'));
const Chart = lazy(() => import('./page/chart'));
export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Main />, index: true },
      { path: '/result', element: <Result />, index: true },
      { path: '/storage', element: <Storage></Storage>, index: true },
      { path: '/login', element: <Login></Login>, index: true },
      { path: '/chart', element: <Chart></Chart>, index: true },
    ],
  },
];

export const pages = [{ route: '/' }, { route: '/result' }];
