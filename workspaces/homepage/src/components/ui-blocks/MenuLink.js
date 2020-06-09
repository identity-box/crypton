import styled from '@emotion/styled'
import { Link } from 'gatsby'

const MenuLink = styled(Link)({
  display: 'inline-block',
  color: '#08558a',
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '10pt',
  '&:hover': {
    color: 'black',
    textDecoration: 'none'
  }
})

export { MenuLink }
