import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
        <Route path='/vita' exact>
          <Vita />
        </Route>
        <Route path='/projects' exact>
          <Projects />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routing
