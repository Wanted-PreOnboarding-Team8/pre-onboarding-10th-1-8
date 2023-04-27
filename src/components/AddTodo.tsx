import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import { type Mutate } from '../hooks/useTodo';

interface AddTodoProps {
  mutate: (args: Mutate) => Promise<void>;
}

function AddTodo({ mutate }: AddTodoProps) {
  const [todo, setTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append('todo', todo);
    await mutate({ method: 'POST', body: data });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="new-todo-input"
        placeholder="AddTodo"
        value={todo}
        onChange={handleChange}
      />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
}

export default AddTodo;
