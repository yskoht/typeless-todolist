import { createActions } from 'typeless';

export const MODULE = 'todoList';

let nextTodoId = 0;
export const TodoListActions = createActions(MODULE, {
  addTodo: (text: string) => {
    const a = { payload: { text, id: nextTodoId } };
    nextTodoId += 1;
    return a;
  },
  setVisibilityFilter: filter => ({ payload: { filter } }),
  toggleTodo: id => ({ payload: { id } })
});

export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoListState {
  todos: TodoType[];
}

declare module 'typeless/types' {
  interface DefaultState {
    todoList: TodoListState;
  }
}
