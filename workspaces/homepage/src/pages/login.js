import React, { useCallback, useState, useEffect } from 'react'
import { navigate } from 'gatsby'

import { FadingValueBox } from 'src/components/animations'

const isAuthenticated = () => {
  const isSSR = typeof window === 'undefined'
  if (!isSSR) {
    return localStorage.getItem('authenticated') === 'true'
  }
  return false
}

const Login = ({ data, location }) => {
  const [authenticated, setAuthenticated] = useState(true)

  useEffect(() => {
    if (!isAuthenticated()) {
      setAuthenticated(false)
    } else {
      navigate('/')
      setAuthenticated(true)
    }
  }, [])
  const onClick = useCallback(() => {
    const isSSR = typeof window === 'undefined'
    if (!isSSR) {
      localStorage.setItem('authenticated', true)
    }
    navigate('/')
  }, [])

  if (authenticated) {
    return null
  }

  return (
    <FadingValueBox alignItems='center'>
      <button onClick={onClick}>Login...</button>
    </FadingValueBox>
  )
}

export default Login
