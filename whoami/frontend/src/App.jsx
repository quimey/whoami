import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import Game from './components/Game'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import Footer from './components/Footer'
import { auth } from './actions'
import gameApp from './reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  gameApp, composeEnhancer(applyMiddleware(thunk))
)

const PrivateRoute = ({ auth, loadUser, component: ChildComponent, ...rest }) => {
  useEffect(() => { loadUser() }, [])
  return <Route {...rest} render={props => {
    if (auth.isLoading) {
      return <em>Loading...</em>
    } else if (!auth.isAuthenticated) {
      return <Redirect to="/login" />
    } else {
      return <ChildComponent {...props} />
    }
  }} />
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
  component: PropTypes.elementType.isRequired
}

const Router = ({ auth, loadUser }) => <BrowserRouter>
  <Menu />
  <Switch>
    <PrivateRoute auth={auth} loadUser={loadUser} exact path="/" component={Game} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
  <Footer />
</BrowserRouter>

Router.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser())
    }
  }
}

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Router)

const App = () => <Provider store={store}>
  <RootContainer />
</Provider>

export default App

const wrapper = document.getElementById('container')
wrapper ? ReactDOM.render(<App />, wrapper) : false
