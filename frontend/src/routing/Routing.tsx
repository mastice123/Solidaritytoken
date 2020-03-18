import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../Containers/Login'

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  )
}

export default Routing
