import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, toggleTodo, removeTodo, clearCompleted } from '../redux/slices/todosSlice';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  if (!todos.length) {
    return <div>No tasks. Add one!</div>;
  }

  return (
    <div>
      <ul style={{ paddingLeft: 0 }}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => dispatch(toggleTodo(todo.id))}
            onRemove={() => dispatch(removeTodo(todo.id))}
          />
        ))}
      </ul>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => dispatch(clearCompleted())}>Clear completed</button>
      </div>
    </div>
  );
}
