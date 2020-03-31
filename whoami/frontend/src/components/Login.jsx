import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import { auth } from '../actions'

const Login = ({ login, isAuthenticated, errors }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    login(username, password)
  }
  if (isAuthenticated) {
    return <Redirect to="/" />
  }
  return (
    <Form onSubmit={onSubmit}>
      <fieldset>
        <legend>Login</legend>
        {errors.length > 0 && (
          <ul>
            {errors.map(error => (
              <li key={error.field}>{error.message}</li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="username">Username</label>
          <input
            type="text" id="username"
            onChange={e => setUsername(e.target.value)} />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password" id="password"
            onChange={e => setPassword(e.target.value)} />
        </p>
        <p>
          <button type="submit">Login</button>
        </p>

        <p>
          {'Don\'t have an account?'}
          <Link to="/register">Register</Link>
        </p>
      </fieldset>
    </Form>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => {
  let errors = []
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return { field, message: state.auth.errors[field] }
    })
  }
  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      return dispatch(auth.login(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
