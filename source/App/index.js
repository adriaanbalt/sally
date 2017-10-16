import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Market from 'source/market'
import About from 'source/about'
import Details from 'source/details'
import NotFound from 'source/NotFound'

class App extends Component {

  render(){
    return(
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
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)