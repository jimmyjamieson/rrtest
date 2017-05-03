import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import {injectGlobal, ThemeProvider} from 'styled-components'
import styled from 'styled-components';

import store from './store';
import theme from './theme';

injectGlobal`
   html {
    height: 100%;
    min-height: 100%;
    font-size: 1rem;
    line-height: 1.5;
   }
  body {
    margin: 0;
    height: 100%;
    min-height: 100%;
    background: #efefef;
  }
  #root {
    height: 100%;
    min-height: 100%;
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