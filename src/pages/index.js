import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/layout'

const ContentCont = styled(Container)`
  margin: 5vw 10vw;
  .emdr-row {
    background-image: url(https://testing.elizabethdavis-emdr.com/wp-content/uploads/2018/08/Eye-Movement-Desensitization-and-Reprocessing-EMDR-for-PTSD.jpg);
    background-repeat: no-repeat;
    background-position: 0% 7%;
    background-size: cover;
    position: relative;
    .darken-overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.5);
    }
    a {
      text-decoration: none;
      color: white;
      .emdr-div {
        position: relative;
        z-index: 10;
        height: 5rem;
        padding: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3 {
          margin-bottom: 0;
        }
      }
    }
  }
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
            <Row className="emdr-row">
              <Col>
                <div className="darken-overlay" />
                <Link to={`/`}>
                  <div className="emdr-div">
                    <h3>EMDR</h3>
                    <p>EMDR (Eye Movement Desensitization and Reprocessing) is a psychotherapy that enables people to heal from the symptoms and emotional distress that are the result of disturbing life experiences.</p>
                  </div>
                </Link>
              </Col>
            </Row>
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
