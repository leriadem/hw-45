// src/redux/slices/todosSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    // пример начального состояния (можно оставить пустым)
    // { id: '1', text: 'Пример задачи', completed: false }
  ]
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
            createdAt: Date.now()
          }
        };
      }
    },
    toggleTodo(state, action) {
      const id = action.payload;
      const todo = state.todos.find(t => t.id === id);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter(t => t.id !== id);
    },
    // пример: очистить все выполненные
    clearCompleted(state) {
      state.todos = state.todos.filter(t => !t.completed);
    },
    // можно добавить редюсер для редактирования текста
    editTodo(state, action) {
      const { id, text } = action.payload;
      const todo = state.todos.find(t => t.id === id);
      if (todo) todo.text = text;
    }
  }
});

export const { addTodo, toggleTodo, removeTodo, clearCompleted, editTodo } = todosSlice.actions;

export const selectTodos = state => state.todos.todos; // селектор

export default todosSlice.reducer;
