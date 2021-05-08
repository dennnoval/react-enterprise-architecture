import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import logo512px from './assets/logo512.png'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h3>Hello World</h3>
          <img src={logo512px} height='128px'/>
        </Route>
      </Switch>
    </Router>
  )
}
