import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: 20 }}>
      <h1>Todo (Redux Toolkit)</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}