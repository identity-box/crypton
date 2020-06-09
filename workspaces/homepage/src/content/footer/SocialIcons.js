import React from 'react'
import styled from '@emotion/styled'
import { getImage } from 'src/assets'

const SocialIconsRow = styled.div({
  // width: '140px',
  width: '74px',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '30px'
})

const SocialIcon = ({ imageUrl, ...props }) => (
  <div
    css={{
      margin: 0,
      width: '32px',
      height: '32px',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }} {...props}
  />
)

const SocialIcons = ({ data }) => (
  <SocialIconsRow css={{
    '@media (min-width: 568px)': {
      alignSelf: 'flex-start',
      marginLeft: '55px'
    }
  }}
  >
    {/* <a aria-label='twitter' href='https://twitter.com/identity_box'><SocialIcon imageUrl={getImage(data, 'Twitter')} /></a> */}
    {/* <a href='https://twitter.com/identity_box'><SocialIcon imageUrl={getImage(data, 'Youtube')} css={{ width: '46px' }} /></a> */}
    <a aria-label='Github' href='https://github.com/identity-box/crypton'><SocialIcon imageUrl={getImage(data, 'GitHub')} /></a>
  </SocialIconsRow>
)

export { SocialIcons }
