import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { Router } from "@reach/router"

import rootReducer from "./reducers"
import Dashboard from "./views/Dashboard"
import TopBar from "./components/TopBar"
import LoginForm from "./components/LoginForm"
import ActivationForm from "./components/ActivationForm"
import ForgotPasswordForm from "./components/ForgotPasswordForm"
import RenderOnAnonymous from "./components/RenderOnAnonymous"
import RenderOnAuthenticated from "./components/RenderOnAuthenticated"

import SubscireForm from "./components/subscribeForm"
import AlertMessage from "./components/AlertMessage"
import PrivateRoute from "./components/PrivateRoute"
import PublicRoute from "./components/PublicRoute"

const App: React.FC = () => {
  const store = createStore(rootReducer)
  return (
    <Provider store={store}>
      <TopBar />
      <Router>
        <PrivateRoute path="/app/dashboard" component={Dashboard} />
        <PrivateRoute path="/app/home" component={Dashboard} />
        <PrivateRoute path="/app/" component={Dashboard} />

        <PublicRoute path="/app/login" component={LoginForm} />
        <PublicRoute path="/app/subscribe" component={SubscireForm} />
        <PublicRoute path="/app/activate" component={ActivationForm} />
        <PublicRoute
          path="/app/forgotPassword"
          component={ForgotPasswordForm}
        />
      </Router>

      <AlertMessage />
    </Provider>
  )
}

export default App
