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

if (import.meta) {
  worker.start();
}

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
