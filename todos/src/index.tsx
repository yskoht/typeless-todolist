import React from 'react';
import ReactDOM from 'react-dom';
import { RootEpic, RootReducer, TypelessProvider } from 'typeless';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { App } from './components/App';

const rootEpic = new RootEpic();
const rootReducer = new RootReducer();
const store = (() => {
  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer.getReducer());
  }
  return createStore(rootReducer.getReducer(), composeWithDevTools());
})();

ReactDOM.render(
  <TypelessProvider rootEpic={rootEpic} rootReducer={rootReducer} store={store}>
    <App />
  </TypelessProvider>,
  document.getElementById('app')
);
