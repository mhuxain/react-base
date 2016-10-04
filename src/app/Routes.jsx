import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Contractors from './contractors/index.jsx'
import Contracts from './contracts/index.jsx'

import Home from './Home'
import NotFound from './NotFound'

module.exports = (
  <Route path="/">
    // home path routes
    <IndexRoute component={Home}/>

    <Route path="/contractors" component={Contractors} />
    <Route path="/contracts" component={Contracts} />

    <Route path='*' component={NotFound} />

  </Route>

)
