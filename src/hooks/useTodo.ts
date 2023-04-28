import { useState, useEffect } from 'react';
import { AxiosError, type AxiosResponse, type AxiosRequestConfig } from 'axios';
import { TodoApi } from '../api/TodoApi';
import STATUS from './const';

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  // userId?: number;
}

export interface Mutate {
  method: 'POST' | 'PUT' | 'DELETE';
  id?: number;
  body?: FormData | { todo: string; isCompleted?: boolean };
}

interface Response {
  response: AxiosResponse<Todo>;
  method: 'POST' | 'PUT' | 'DELETE';
  id?: number;
}

interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

type RequsetType = AxiosRequestConfig;

const TODOS = 'todos';

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<AxiosError<ErrorResponse>>();
  const [apiResponse, setApiResponse] = useState<Response>();

  useEffect(() => {
    const getTodos = async (): Promise<void> => {
      try {
        const result = await TodoApi.get<Todo[]>(`/${TODOS}`);
        if (result.status === 200) {
          setTodos(result.data);
        }
      } catch (axiosError) {
        if (axiosError instanceof AxiosError) {
          setError(axiosError);
        }
      }
    };
    getTodos().catch(err => {
      setError(err);
    });
  }, []);

  const generateRequest = ({ method, id, body }: Mutate) => {
    const request: RequsetType = {
      method,
      url: `${TODOS}`,
    };
    if (id !== null && id !== undefined) {
      request.url = `${TODOS}/${id}`;
    }
    return body === null ? request : { ...request, data: body };
  };

  const mutate = async (args: Mutate) => {
    const { method, id } = args;
    let result: AxiosResponse;

    const request = generateRequest(args);
    try {
      result = await TodoApi(request);
      const { status } = result;

      if (status === STATUS.OK || status === STATUS.CREATED) {
        setApiResponse({ response: result, method });
      }
      if (status === STATUS.NO_CONTENT) {
        setApiResponse({ response: result, method, id });
      }
    } catch (axiosError) {
      if (axiosError instanceof AxiosError) {
        setError(axiosError);
      }
    }
  };

  const handlePost = (todoResponse: Todo) => {
    setTodos(prev => [...prev, todoResponse]);
  };

  const handleDelete = (id: number) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(() => filteredTodos);
  };

  const handlePut = (todoResponse: Todo) => {
    const index = todos.findIndex(todo => todo.id === todoResponse.id);
    const copyTodos = [...todos];
    copyTodos[index] = { ...todoResponse };

    setTodos(() => copyTodos);
  };

  useEffect(() => {
    if (apiResponse != null) {
      const { method, response, id } = apiResponse;

      switch (method) {
        case 'DELETE':
          if (id !== null && id !== undefined) handleDelete(id);
          break;
        case 'POST':
          handlePost(response.data);
          break;
        case 'PUT':
          handlePut(response.data);
          break;
        default:
          break;
      }
    }
  }, [apiResponse]);

  useEffect(() => {
    if (error != null) {
      alert(error.response?.data.message);
    }
  }, [error]);

  return [todos, mutate] as const;
}
