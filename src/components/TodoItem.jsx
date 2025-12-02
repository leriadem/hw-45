import React from 'react';

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li style={{ listStyle: 'none', marginBottom: 8, display: 'flex', alignItems: 'center' }}>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      <span style={{
        marginLeft: 8,
        textDecoration: todo.completed ? 'line-through' : 'none',
        flex: 1
      }}>
        {todo.text}
      </span>
      <button onClick={onRemove} style={{ marginLeft: 8 }}>Delete</button>
    </li>
  );
}
