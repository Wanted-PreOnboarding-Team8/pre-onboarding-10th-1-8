import axios, { type AxiosResponse } from 'axios';
import BASE_URL from './constant';

const AuthApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

AuthApi.interceptors.response.use((response: AxiosResponse) => {
  if (response.data.access_token !== undefined) {
    localStorage.setItem('access_token', response.data.access_token);
    return response;
  }
  return response;
});

export default AuthApi;
