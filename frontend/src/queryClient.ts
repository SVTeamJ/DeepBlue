import { useQuery, QueryClient } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';

type AnyOBJ = { [key: string]: any };

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

const BASE_URL = '';

export const restFetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  body?: AnyOBJ;
  params?: AnyOBJ;
  // headers?: AnyOBJ;
}) => {
  try {
    let url = `${BASE_URL}${path}`;
    let axiosConfig: AxiosRequestConfig = {
      method,
    };
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += '?' + searchParams.toString();
    }
    if (body) axiosConfig.data = body;

    // if (headers) {
    //   axiosConfig = { ...axiosConfig, headers };
    // }
    const res = await axios(url, axiosConfig);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const QueryKeys = {
  FISHLIST: 'FISHLIST',
  USER: 'USER',
};
