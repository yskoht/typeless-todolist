import React from 'react';
import { useMappedState, useActions } from 'typeless';
import { TodoListActions, TodoType } from '../interface';
import { Filter } from '../../footer/interface';
import TodoList from './TodoList';

function getVisibleTodos(todos: TodoType[], visibilityFilter: Filter) {
  switch (visibilityFilter) {
    case 'SHOW_ALL':
      return { todos };
    case 'SHOW_COMPLETED':
      return { todos: todos.filter(t => t.completed) };
    case 'SHOW_ACTIVE':
      return { todos: todos.filter(t => !t.completed) };
    default:
      throw new Error(`Unknown filter: ${visibilityFilter}`);
  }
}

export function VisibleTodoList() {
  const { todos } = useMappedState(state =>
    getVisibleTodos(state.todoList.todos, state.footer.visibilityFilter)
  );
  const { toggleTodo } = useActions(TodoListActions);

  return <TodoList todos={todos} toggleTodo={toggleTodo} />;
}
