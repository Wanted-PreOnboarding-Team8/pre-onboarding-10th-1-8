import React from 'react';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoItem from '../components/TodoItem/TodoItem';
import useTodos from '../hooks/useTodo';

function Todo() {
  const [todos, mutate] = useTodos();

  return (
    <div>
      <AddTodo mutate={mutate} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            isCompleted={todo.isCompleted}
            todo={todo.todo}
            mutate={mutate}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
