import React from 'react';
import {
  useTodoListModule,
  AddTodoComponent,
  VisibleTodoListComponent
} from '../features/todoList/module';
import { useFooterModule, FooterComponent } from '../features/footer/module';

export function App() {
  useTodoListModule();
  useFooterModule();

  return (
    <>
      <AddTodoComponent />
      <VisibleTodoListComponent />
      <FooterComponent />
    </>
  );
}
