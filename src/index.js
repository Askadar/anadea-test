import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import reducers from './reducers';
import './index.css';
import App from './App';
import { saveHistory, loadHistory } from './utils';

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    loadHistory(),
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

store.subscribe(() => saveHistory(store.getState().History))
// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
