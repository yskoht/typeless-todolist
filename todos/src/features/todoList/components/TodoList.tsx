import React from 'react';
import Todo from './Todo';
import { TodoType } from '../interface';

interface Props {
  todos: TodoType[];
  toggleTodo: (id: number) => any;
}

const TodoList = ({ todos, toggleTodo }: Props) => (
  <ul>
    {todos.map((todo: TodoType) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
