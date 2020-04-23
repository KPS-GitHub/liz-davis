import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
// import Helmet from 'react-helmet'
import Layout from '../components/layout'

const ContentCont = styled(Container)`
  margin: 0 10vw;
`

class RootIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <div style={{ background: 'white' }}>
          {/* <Helmet title={siteTitle} /> */}
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
