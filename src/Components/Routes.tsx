import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Screens/Home/Dashboard'
import Navbar from './Screens/Nav/Navbar'
import Error from './Error'

const Routes: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default Routes
