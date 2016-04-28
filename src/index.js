import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app.js';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import 'bootstrap-css-only/css/bootstrap.css';

import reducers from './reducers';
import {addNote, removeNote, editNote} from './actions';

const store = createStore(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
