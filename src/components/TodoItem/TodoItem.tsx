import React, { useState } from 'react';
import { type Todo, type Mutate } from '../../hooks/useTodo';
import Button from '../shared/Button/Button';
import TodoList from './TodoItemStyle';

type MutateProps = Mutate;

interface TodoProps extends Todo {
  mutate: (args: MutateProps) => Promise<void>;
}

// eslint-disable-next-line object-curly-newline
function TodoItem({ id, isCompleted, todo, mutate }: TodoProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [todoInput, setTodoInput] = useState(todo);

  const toggleEdit = () => {
    setIsEdit(prev => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const handleUpdate = async () => {
    await mutate({ method: 'PUT', id, body: { todo: todoInput, isCompleted } });
    toggleEdit();
  };

  const handleCheckBox = async () => {
    await mutate({ method: 'PUT', id, body: { todo, isCompleted: !isCompleted } });
  };

  const handleUpdateCancel = () => {
    setTodoInput(() => todo);
    setIsEdit(() => false);
  };

  const handleDelete = async () => {
    await mutate({ method: 'DELETE', id });
  };

  return (
    <TodoList className="todo-li">
      <label>
        <input type="checkbox" checked={isCompleted} onChange={handleCheckBox} />
        {isEdit ? (
          <input data-testid="modify-input" value={todoInput} onChange={handleChange} />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      <div>
        <Button
          dataId={isEdit ? 'submit-button' : 'modify-button'}
          buttonText={isEdit ? '제출' : '수정'}
          onClickFn={isEdit ? handleUpdate : toggleEdit}
        />
        <Button
          dataId={isEdit ? 'cancel-button' : 'delete-button'}
          buttonText={isEdit ? '취소' : '삭제'}
          onClickFn={isEdit ? handleUpdateCancel : handleDelete}
        />
      </div>
    </TodoList>
  );
}

export default TodoItem;
