import { createActions } from 'typeless';

export const MODULE = 'footer';

export const FooterActions = createActions(MODULE, {
  setVisibilityFilter: filter => ({ payload: { filter } })
});

export type Filter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

export interface FooterState {
  visibilityFilter: Filter;
}

declare module 'typeless/types' {
  interface DefaultState {
    footer: FooterState;
  }
}
