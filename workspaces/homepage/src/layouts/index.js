import { React } from 'react'
import { withPrefix } from 'gatsby'

import Layout from '@confluenza/gatsby-theme-confluenza/src/layouts'

import Home from '@confluenza/gatsby-theme-confluenza/src/components/home'

const CryptonLayout = ({ location, children }) => {
  if (location.pathname === withPrefix('/login')) {
    return (
      <Home>
        {children}
      </Home>
    )
  } else {
    return (
      <Layout location={location} children={children} />
    )
  }
}

export default CryptonLayout
