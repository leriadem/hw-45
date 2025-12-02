# HW 45 - My Redux App (Todo)

## Опис проєкту

Це простий Todo-додаток, створений на React із використанням Vite та інтеграцією Redux Toolkit.
Стан додатку (список завдань) було перенесено з локального стану/пропсів до глобального Redux Store, що відповідає вимогам домашнього завдання.

Додаток демонструє базові принципи роботи з:
1. Redux Toolkit
2. createSlice
3. useSelector / useDispatch
4. Підключення Redux Store через Provider

## Функціональність

1. Додавання нового завдання
2. Позначення завдання як виконаного / скасування виконання
3. Видалення завдання
4. Очищення всіх виконаних завдань

## Деплой

https://hw-45-seven.vercel.app/

## Структура проєкту

```
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
```
