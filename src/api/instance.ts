import axios from 'axios';

import { BASE_API_URL } from '~/app/config';
import { DEV } from '~/app/constant';

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

const createInstance = (config?: AxiosRequestConfig): AxiosInstance => {
  const defaultConfig: AxiosRequestConfig = {
    baseURL: BASE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedConfig = {
    ...defaultConfig,
    ...config,
  };

  const instance = axios.create(mergedConfig);

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (!import.meta.env.VITE_API_LOG_OFF) {
        console.log(
          `%c[${response.config.method?.toUpperCase()}] ${response.config.url}`,
          DEV.LOG_STYLE.GOLD,
          '\nCONFIG',
          response.config,
          '\nRESPONSE',
          response.data
        );
      }

      return response;
    },
    (error: AxiosError) => {
      if (!import.meta.env.VITE_API_LOG_OFF) {
        console.log(
          `%c[${error.config?.method?.toUpperCase()}] ${error.config?.url}`,
          DEV.LOG_STYLE.RED,
          error
        );
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createInstance;
