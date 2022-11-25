import axios, { AxiosError, type AxiosResponse } from 'axios';

const BASE_API_SERVER_URL = import.meta.env.VITE_API_SERVICE_BASE_URL;

export const api = axios.create({
  baseURL: BASE_API_SERVER_URL,
});

api.interceptors.response.use(
  ({ data }: AxiosResponse) => data,
  (error: AxiosError) => {
    console.log('error occured while response', error);
  }
);
