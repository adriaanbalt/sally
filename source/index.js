import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './Store'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Market from './market'
import About from './about'
import Details from './details'
import NotFound from './NotFound'

import './index.scss'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <main>
        <div className="wrapper">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Market} />
              <Route path="/about" component={About} />
              <Route path="/:symbol" component={Details} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </main>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
)
