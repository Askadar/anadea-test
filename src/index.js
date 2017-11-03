import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'white',

    alternateTextColor: 'black',
  },
  appBar: {
    height: 50,
  },
});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
