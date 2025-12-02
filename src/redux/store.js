// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer
  },
  // devTools включены по умолчанию в dev
});
