import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app.js';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import 'bootstrap-css-only/css/bootstrap.css';

import reducers from './reducers';
import {addNote, removeNote, editNote} from './actions';

const store = createStore(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);
store.dispatch(addNote('test 1'));
store.dispatch(addNote('test 2'));
store.dispatch(addNote('test 3'));
// store.dispatch(removeNote(1));
store.dispatch(editNote(1, 'new test'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
