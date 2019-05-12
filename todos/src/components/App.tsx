import React from 'react';
import {
  useTodoModule,
  AddTodoComponent,
  VisibleTodoListComponent
} from '../features/todoList/module';
import {
  useVisibilityFilterModule,
  FooterComponent
} from '../features/footer/module';

export function App() {
  useTodoModule();
  useVisibilityFilterModule();

  return (
    <>
      <AddTodoComponent />
      <VisibleTodoListComponent />
      <FooterComponent />
    </>
  );
}
