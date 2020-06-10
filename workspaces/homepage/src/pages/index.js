import React, { useEffect } from 'react'
import { graphql, navigate } from 'gatsby'

// import { PrivateRoute } from 'src/components/private-route'
import { Crypton } from 'src/components/crypton'

const isAuthenticated = state => {
  return (state && state.authenticated)
}

const Home = ({ data, location }) => {
  console.log('************* Welcome to CRYPTON *************')

  useEffect(() => {
    if (!isAuthenticated(location.state)) {
      navigate('/login')
    }
  }, [location.state])

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
