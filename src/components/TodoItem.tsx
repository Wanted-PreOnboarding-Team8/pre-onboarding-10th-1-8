import React, { useState } from 'react';
import { type Todo, type Mutate } from '../hooks/useTodo';

type MutateProps = Mutate;

interface TodoProps extends Todo {
  mutate: (args: MutateProps) => Promise<void>;
}

// eslint-disable-next-line object-curly-newline
function TodoItem({ id, isCompleted, todo, mutate }: TodoProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [todoInput, setTodoInput] = useState(todo);
  // const inputRef = useRef(todo);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      isCompleted,
      todo: todoInput,
    };
    await mutate({ method: 'PUT', id, body: data });
    setIsEdit(false);
  };

  const handleCheck = async () => {
    const checked = !isCompleted;
    const data = {
      todo,
      isCompleted: checked,
    };

    await mutate({ method: 'PUT', id, body: data });
  };

  const handleCancel = () => {
    setTodoInput(() => todo);
    setIsEdit(() => false);
  };

  const handleDelete = async () => {
    await mutate({ method: 'DELETE', id });
  };

  return (
    <li className="todo-li">
      <label>
        <input type="checkbox" checked={isCompleted} onChange={handleCheck} />
        {isEdit ? (
          <input data-testid="modify-input" value={todoInput} onChange={handleChange} />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      {isEdit ? (
        <div>
          <button type="button" data-testid="submit-button" onClick={handleSubmit}>
            제출
          </button>
          <button type="button" data-testid="cancel-button" onClick={handleCancel}>
            취소
          </button>
        </div>
      ) : (
        <div>
          <button
            type="button"
            data-testid="modify-button"
            onClick={() => {
              setIsEdit(true);
            }}
          >
            수정
          </button>
          <button type="button" data-testid="delete-button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
