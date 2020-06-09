import React, { useState, useEffect, useCallback, useRef, Suspense } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Header } from 'src/components/header'

import { BodyFrame } from 'src/components/ui-blocks'
import { Footer } from 'src/content'

// import style manually
import 'react-markdown-editor-lite/lib/index.css'

import MarkdownIt from 'markdown-it'
const MdEditor = React.lazy(() => import('react-markdown-editor-lite'))

const useUnusualReloader = (location, onReady) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
    onReady && onReady()
  }, [onReady])

  return ready
}

const Home = ({ data, location }) => {
  const mdParser = useRef(undefined)
  console.log('************* Welcome to CRYPTON *************')

  const onReady = useCallback(() => {
    setTimeout(() => {
      setVisibility('visible')
    }, 100)
  }, [])

  useEffect(() => {
    mdParser.current = new MarkdownIt(/* Markdown-it options */)
  }, [])

  const handleEditorChange = useCallback(({ html, text }) => {
    // console.log('handleEditorChange', html, text)
  }, [])

  const pageReady = useUnusualReloader(location, onReady)

  const [visibility, setVisibility] = useState('hidden')

  if (!pageReady) {
    return null
  }

  return (
    <>
      <Helmet title='Crypton'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
        <link href='https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap' rel='stylesheet' />
      </Helmet>
      <Header />
      <BodyFrame css={{ visibility }}>
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
        <Suspense fallback={<div>Loading...</div>}>
          <MdEditor
            value=''
            style={{ height: '500px', width: '100%' }}
            renderHTML={(text) => mdParser.current.render(text)}
            onChange={handleEditorChange}
          />
        </Suspense>
        <Footer data={data} />
      </BodyFrame>
    </>
  )
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
