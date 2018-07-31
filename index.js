import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ToDo from './src/components/ToDo';
import reducer from './src/reducers/reducer';

const root = document.getElementById('root');
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <ToDo />
  </Provider>,
  root,
);
