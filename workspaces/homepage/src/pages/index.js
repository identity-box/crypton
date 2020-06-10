import React, { useEffect, useState } from 'react'
import { graphql, navigate } from 'gatsby'

// import { PrivateRoute } from 'src/components/private-route'
import { Crypton } from 'src/components/crypton'

const isAuthenticated = () => {
  const isSSR = typeof window === 'undefined'
  if (!isSSR) {
    return localStorage.getItem('authenticated') === 'true'
  }
  return false
}

const Home = ({ data, location }) => {
  const [authenticated, setAuthenticated] = useState(false)
  console.log('************* Welcome to CRYPTON *************')

  useEffect(() => {
    if (!isAuthenticated()) {
      setAuthenticated(false)
      navigate('/login')
    } else {
      setAuthenticated(true)
    }
  }, [])

  if (!authenticated) {
    return null
  }

  return (
    <Crypton data={data} />
  )

  // <Router>
  //   <PrivateRoute path='/' component={Crypton} />
  //   <PrivateRoute path='/app/profile' component={Profile} />
  //   <Login path='/app/login' />
  // </Router>
}

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {glob: "**/homepage/src/images"}}) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`

export default Home
