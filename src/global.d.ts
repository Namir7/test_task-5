import axios from 'axios';

declare global {
  type id = number;

  type serialNumber = string;

  type locationPoint = {
    lat: number;
    lng: number;
  };
}

declare module 'axios' {
  interface AxiosInstance {
    <T = any>(url: string, config?: AxiosRequestConfig<any>): Promise<T>;
  }
}

export {};
