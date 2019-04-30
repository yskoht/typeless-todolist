import React from 'react';
import { useModule, createEpic, createReducer } from 'typeless';
import { TodoListActions, TodoListState, MODULE } from './interface';
import { AddTodo } from './components/AddTodo';
import { VisibleTodoList } from './components/VisibleTodoList';

const epic = createEpic(MODULE);

const initialState: TodoListState = {
  todos: []
};

const reducer = createReducer(initialState)
  .on(TodoListActions.addTodo, (state, { id, text }) => {
    state.todos.push({
      id,
      text,
      completed: false
    });
  })
  .on(TodoListActions.toggleTodo, (state, { id }) => {
    state.todos = state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  });

export function useTodoListModule() {
  useModule({
    epic,
    reducer,
    reducerPath: ['todoList']
  });
}

export function AddTodoComponent() {
  return <AddTodo />;
}

export function VisibleTodoListComponent() {
  return <VisibleTodoList />;
}
