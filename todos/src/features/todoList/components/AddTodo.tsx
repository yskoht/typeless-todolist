import React from 'react';
import { useActions } from 'typeless';
import { TodoListActions } from '../interface';

export function AddTodo() {
  const { addTodo } = useActions(TodoListActions);
  let input;

  const onSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    addTodo(input.value);
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
