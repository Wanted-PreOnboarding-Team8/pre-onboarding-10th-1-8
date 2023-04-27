import { AxiosError, type AxiosResponse } from 'axios';
import AuthApi from '../api/AuthApi';

export interface FormType {
  email: string;
  password: string;
}

export default function useAuthApi(url: string) {
  return async (form: FormType): Promise<AxiosResponse> => {
    let response: AxiosResponse | undefined;
    try {
      response = await AuthApi.post(url, form);
      if (response === undefined) {
        throw new Error('No response');
      }
      return response;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        alert(error.message);
      }
    }
    if (response === undefined) {
      throw new Error('No response');
    }
    return response;
  };
}
