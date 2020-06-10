import React, { useCallback } from 'react'
import { navigate } from 'gatsby'

const Login = ({ data, location }) => {
  const onClick = useCallback(() => {
    navigate('/', { state: { authenticated: true } })
  }, [])

  return (
    <div>
      <button onClick={onClick}>Login...</button>
    </div>
  )
}

export default Login
