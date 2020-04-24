import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/layout'

const ContentCont = styled(Container)`
  margin: 0 10vw;
`

class RootIndex extends React.Component {
  render() {

    return (
      <Layout >
        <div style={{ background: 'white' }}>
          <Helmet>
            <title>Elizabeth Davis - EMDR and Art Therapy</title>
            <style type="text/css">{`
              body {
                display: contents;
              }
              #gatsby-focus-wrapper {
                width: 100%;
                height: 100%;
              }
              #___gatsby {
                width: 100%;
                height: 100%;
              }
            `}</style>
          </Helmet>
          <ContentCont className="wrapper">
            page content
          </ContentCont>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPage(title: {eq: "Home"}) {
      title
      slug
    }
  }
`
