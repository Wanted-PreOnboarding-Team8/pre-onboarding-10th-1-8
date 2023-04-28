import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import { type Mutate } from '../../hooks/useTodo';
import * as S from './AddTodoStyle';

interface AddTodoProps {
  mutate: (args: Mutate) => Promise<void>;
}

function AddTodo({ mutate }: AddTodoProps) {
  const [todo, setTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutate({ method: 'POST', body: { todo } });
    setTodo('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <S.AddTodoInput
        data-testid="new-todo-input"
        placeholder="AddTodo"
        value={todo}
        onChange={handleChange}
      />
      <S.AddTodoButton type="submit" data-testid="new-todo-add-button">
        추가
      </S.AddTodoButton>
    </form>
  );
}

export default AddTodo;
