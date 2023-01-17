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
if (import.meta) {
  worker.start();
}

Sentry.init({
  dsn: 'https://aaa37d4cc2c242a3a721442b85b43ec2@o4504518618513408.ingest.sentry.io/4504518619496448',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const queryClient = getClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
