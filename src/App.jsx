import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Page1, Page2 } from './pages'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Page1/>
        </Route>
        <Route exact path='/page2' component={Page2}/>
      </Switch>
    </Router>
  )
}
