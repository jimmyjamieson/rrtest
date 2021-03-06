import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {injectGlobal, ThemeProvider} from 'styled-components'

import store from './store';
import theme from './theme';

import './styles/index.scss';

injectGlobal`
   html {
    height: 100%;
    min-height: 100%;
    font-size: 1rem;
    line-height: 1.5;
   }
  body {
    display: flex;
    height: 100%;
    position: relative;
    margin:0; padding: 0;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }
  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`


import AppContainer from './containers/app/app.container';

ReactDOM.render((
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </ThemeProvider>
    ),
    document.getElementById('root'));