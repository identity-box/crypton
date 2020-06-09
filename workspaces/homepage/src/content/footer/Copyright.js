import React from 'react'
import { Row } from 'src/components/ui-blocks'

const Copyright = () => (
  <Row>
    <p css={{
      color: '#08558a',
      fontFamily: 'Roboto Mono, monospace',
      fontSize: '10pt',
      margin: 0
    }}
    >
      <span css={{
        fontSize: '14pt'
      }}
      >
        &copy;
      </span> 2020 Crypton
    </p>
  </Row>
)

export { Copyright }
