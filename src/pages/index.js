import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/layout'
import Tile from '../components/Tile'

const ContentDiv = styled.div`
  margin: 5vw 10vw 15vw 10vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const HomePage = ({ data }) => {
    const serviceData = data.services.edges.map(p => p.node);
    const tileData = data.tiles.edges.map(p => p.node);
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
          <ContentDiv className="wrapper">

            {tileData.map(tile => {
              const imageUrl = tile.backgroundImage ? tile.backgroundImage.file.url : null
              return(
                <Tile title={tile.title} linkTo={tile.page.slug} imgUrl={imageUrl} />
              )
            })}

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
  }
`
