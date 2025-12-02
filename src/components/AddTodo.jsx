import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todosSlice';

export default function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch(addTodo(trimmed));
    setText('');
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: 20 }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New task"
        style={{ padding: '8px 12px', width: '70%', marginRight: 8 }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>Add</button>
    </form>
  );
}
