import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}
