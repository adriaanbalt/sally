import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './Store'
import App from './App'
import Market from 'source/market'
import About from 'source/about'
import Details from 'source/details'
import NotFound from 'source/NotFound'
import Header from 'components/Header'

import './index.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
