import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Vita from './pages/vita/Vita'
import Projects from './pages/projects/Projects'

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/vita'>
          <Vita />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
      </Switch>
      <Redirect to='/' />
    </BrowserRouter>
  )
}

export default Routing
