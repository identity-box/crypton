import React, { useEffect, useCallback, useState, Suspense } from 'react'
import Helmet from 'react-helmet'

import { FadingValueBox } from 'src/components/animations'
import { Header } from 'src/components/header'

import { BodyFrame } from 'src/components/ui-blocks'
import { Footer } from 'src/content'

// import style manually
import 'react-markdown-editor-lite/lib/index.css'
import MarkdownIt from 'markdown-it'
const MdEditor = React.lazy(() => import('react-markdown-editor-lite'))

const Crypton = ({ data }) => {
  const [mdParser, setMdParser] = useState(undefined)
  // see: https://www.gatsbyjs.org/docs/using-client-side-only-packages/#workaround-3-load-client-side-dependent-components-with-loadable-components
  const isSSR = typeof window === 'undefined'

  useEffect(() => {
    setMdParser(new MarkdownIt(/* Markdown-it options */))
  }, [])

  const handleEditorChange = useCallback(({ html, text }) => {
    // console.log('handleEditorChange', html, text)
  }, [])

  if (isSSR || !mdParser) {
    return null
  }

  return (
    <FadingValueBox alignItems='center'>
      <Helmet title='Crypton'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
        <link href='https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap' rel='stylesheet' />
      </Helmet>
      <Header />
      <BodyFrame>
        <div css={{
          width: '100vw',
          backgroundColor: 'white',
          position: 'relative',
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.85
        }}
        >
          <h1>Welcome to Crypton!!!</h1>
          <p>Private, end-to-end encrypted markdown pad for Identity Box</p>
        </div>
        <Suspense fallback={<div />}>
          <MdEditor
            value=''
            style={{ height: '500px', width: '100%' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
        </Suspense>
        <Footer data={data} />
      </BodyFrame>
    </FadingValueBox>
  )
}

export { Crypton }
