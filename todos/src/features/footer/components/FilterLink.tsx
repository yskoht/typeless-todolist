import React, { ReactNode } from 'react';
import { useActions, useMappedState } from 'typeless';
import { FooterActions, Filter } from '../interface';

interface Props {
  filter: Filter;
  children: ReactNode;
}

export function FilterLink({ filter, children }: Props) {
  const { visibilityFilter } = useMappedState(state => state.footer);
  const { setVisibilityFilter } = useActions(FooterActions);

  const onClick = () => setVisibilityFilter(filter);
  const active = filter === visibilityFilter;

  return (
    <button onClick={onClick} disabled={active} style={{ marginLeft: '4px' }}>
      {children}
    </button>
  );
}
