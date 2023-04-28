import axios, { type InternalAxiosRequestConfig } from 'axios';
import BASE_URL from './constant';

export const TodoApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

TodoApi.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('access_token');
  if (accessToken !== null) {
    request.headers.authorization = `bearer ${accessToken}`;
  }
  return request;
});

export default TodoApi;
