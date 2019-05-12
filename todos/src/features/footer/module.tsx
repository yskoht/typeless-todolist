import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';
import { FooterActions, FooterState, MODULE } from './interface';
import { Footer } from './components/Footer';

const epic = createEpic(MODULE);

const initialState: FooterState = {
  visibilityFilter: 'SHOW_ALL'
};

const reducer = createReducer(initialState).on(
  FooterActions.setVisibilityFilter,
  (state, { filter }) => {
    state.visibilityFilter = filter;
  }
);

export function useVisibilityFilterModule() {
  useModule({
    epic,
    reducer,
    reducerPath: ['footer']
  });
}

export function FooterComponent() {
  return <Footer />;
}
