import React from 'react'
import {configureStore} from "./configureStore"
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import '../assets/css/index.css'
import Home from './screens/home'
import Professionals from './screens/professionals'
import ComingSoon from './screens/comingSoon'


function App() {
  const store = configureStore()
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Redirect
            from="/"
            to="/ComingSoon" />
            <Redirect
              from=""
              to="/ComingSoon" />
          <Switch>
          <Route
              path="/ComingSoon"
              component={ComingSoon} />
            <Route
              path="/home"
              component={Home} />
            <Route
              exact
              path="/professionals"
              render={() => <Professionals />} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>

  )
}

export default App
