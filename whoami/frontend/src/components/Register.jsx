import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { auth } from '../actions'

const Login = ({ register, isAuthenticated, errors }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    register(username, password)
  }
  if (isAuthenticated) {
    return <Redirect to="/" />
  }
  return (
    <Form onSubmit={onSubmit}>
      <fieldset>
        <legend>Register</legend>
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
          <button type="submit">Register</button>
        </p>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </fieldset>
    </Form>
  )
}

Login.propTypes = {
  register: PropTypes.func.isRequired,
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
    register: (username, password) => dispatch(auth.register(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
