import React from 'react';
import { FilterLink } from './FilterLink';

export function Footer() {
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={'SHOW_ALL'}>ALL</FilterLink>
      <FilterLink filter={'SHOW_ACTIVE'}>Active</FilterLink>
      <FilterLink filter={'SHOW_COMPLETED'}>Completed</FilterLink>
    </div>
  );
}
