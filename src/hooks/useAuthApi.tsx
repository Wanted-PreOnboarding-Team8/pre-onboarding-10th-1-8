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

// export interface ApiError {
//   status: number;
//   message: string;
// }

// export default function useAuthApi(url: string) {
//   return async (form: FormType): Promise<AxiosResponse | ApiError> => {
//     try {
//       const response = await AuthApi.post(url, form);
//       return response;
//     } catch (error: unknown) {
//       if (error instanceof AxiosError) {
//         const status = error.response?.status ?? 500;
//         const message = error.response?.data?.message ?? error.message;
//         return { status, message };
//       }
//       return { status: 500, message: 'Internal server error' };
//     }
//   };
// }
