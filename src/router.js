import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Product from './views/product'

export default function AppRouter(){
  return (
    <Switch>
      <Route exact path='/' component={Product} />
      <Route component={() => (<div>wrong route</div>)} />
    </Switch>
  )
}
