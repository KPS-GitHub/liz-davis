import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout/layout'
import Tile from '../components/Tile'
import Testimonials from '../components/Testimonials'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 12rem;
  .intro {
    width: 50%;
    text-align: center;
    line-height: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  .tiles-wrap {
    width: 90%;
    // display: flex;
  }
`

const HomePage = ({ data }) => {
    const serviceData = data.services.edges.map(p => p.node);
    const tileData = data.tiles.edges.map(p => p.node);
    const testimonialsData = data.testims.edges.map(p => p.node);
    console.log(testimonialsData)
    return (
      <Layout >
        <div style={{ background: 'white' }}>
          <ContentDiv className="wrapper">

            <div className="intro">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <Container className="tiles-wrap">
              <Row>
                {tileData.map(tile => {
                  const imageUrl = tile.backgroundImage ? tile.backgroundImage.file.url : null
                  return(
                    <Col sm={6}>
                      <Tile title={tile.title} linkTo={tile.page.slug} imgUrl={imageUrl} />
                    </Col>
                  )
                })}
              </Row>
            </Container>

            <Testimonials testims={testimonialsData} />

          </ContentDiv>
        </div>
      </Layout>
    )
}

export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPage(title: {eq: "Home"}) {
      title
      slug
    }
    services: allContentfulService(sort: {order: ASC, fields: order}) {
      edges {
        node {
          title
          tag
          order
          id
          briefDescription {
            briefDescription
          }
          fullDescription {
            json
          }
          tileImage {
            title
            fluid {
              src
            }
            file {
              url
            }
          }
        }
      }
    }
    tiles: allContentfulTile(sort: {fields: order, order: ASC}) {
      edges {
        node {
          title
          backgroundImage {
            file {
              url
            }
          }
          page {
            title
            slug
          }
        }
      }
    }
    testims: allContentfulTestimonial {
      edges {
        node {
          whatTheySaid {
            whatTheySaid
          }
          customerName
        }
      }
    }
  }
`
