import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './Store'
import Nav from 'components/nav'
import Footer from 'components/footer'
import Market from './market'
import About from './about'
import Details from './exchanges/details'

import './index.scss'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <main>
        <div className="wrapper">
          <Nav />
          <Footer />
          <main>
            <Route path="/" component={Market} />
            <Route path="/about" component={About} />
            <Route path="/:symbol" component={Details} />
          </main>
        </div>
      </main>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
)
