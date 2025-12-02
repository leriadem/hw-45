# HW - My Redux App (Todo)

## Опис проєкту

Це простий Todo-додаток, створений на React із використанням Vite та інтеграцією Redux Toolkit.
Стан додатку (список завдань) було перенесено з локального стану/пропсів до глобального Redux Store, що відповідає вимогам домашнього завдання.

Додаток демонструє базові принципи роботи з:

Redux Toolkit

createSlice

useSelector / useDispatch

Підключення Redux Store через Provider

## Функціональність

Додавання нового завдання

Позначення завдання як виконаного / скасування виконання

Видалення завдання

Очищення всіх виконаних завдань

## Деплой

## Структура проєкту

my-redux-app/
├── src/
│ ├── redux/
│ │ ├── store.js
│ │ └── slices/
│ │ └── todosSlice.js
│ ├── components/
│ │ ├── AddTodo.jsx
│ │ ├── TodoItem.jsx
│ │ └── TodoList.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
└── README.md
