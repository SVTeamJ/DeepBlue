import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';
import { worker } from './mocks/worker';
import { getClient } from './queryClient';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import reset from './reset.scss';
import axios from 'axios';
// if (import.meta.env.DEV) {
//   worker.start();
// }
Sentry.init({
  dsn: `${import.meta.env.VITE_Sentry}`,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
axios.defaults.withCredentials = true;
const queryClient = getClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </BrowserRouter>
  </RecoilRoot>,
);
