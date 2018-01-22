import registerServiceWorker from './registerServiceWorker';

import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import { INIT_STORE } from './store/types';
import boundActionCreator from './boundActionCreator';
import { initialState } from './store/initialState';

import App from './components/App';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();

boundActionCreator(INIT_STORE, );
