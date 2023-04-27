import { AxiosError } from 'axios';
import AuthApi from '../api/AuthApi';

export interface FormType {
  email: string;
  password: string;
}

export default function useAuthApi(url: string) {
  return async (form: FormType): Promise<number | undefined> => {
    try {
      const response = await AuthApi.post(url, form);
      return response.status;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        alert(error.message);
      }
    }
    return undefined;
  };
}
