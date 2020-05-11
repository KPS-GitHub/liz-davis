import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/layout'
import Tile from '../components/Tile'

const ContentDiv = styled.div`
  margin: 5vw 10vw 15vw 10vw;
  h3 {
    font-size: 2rem;
    white-space: nowrap;
  }
  .emdr-row {
    background-image: url(https://testing.elizabethdavis-emdr.com/wp-content/uploads/2018/08/Eye-Movement-Desensitization-and-Reprocessing-EMDR-for-PTSD.jpg);
    background-repeat: no-repeat;
    background-position: 0% 7%;
    background-size: cover;
    position: relative;
    margin: 3rem 0;
    .darken-overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.6);
    }
    a {
      text-decoration: none;
      color: white;
      .emdr-div {
        position: relative;
        z-index: 10;
        padding: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 5px 5px 10px black;
        :hover {
          box-shadow: 2px 2px 5px black;
        }
        h3 {
          margin-bottom: 0;
        }
        p {
          text-align: center;
        }
      }
    }
  }

  .row-1 {
    margin: 3rem 0;
    display: flex;
    flex-wrap: nowrap;
    height: 15rem;
    .spacer-div {
      width: 4%;
    }
    a {
      width: 48%;
      height: 100%;
      position: relative;
      text-decoration: none;
      .art-div {

                width: 100%;
        height: 100%;
        background-image: url(https://testing.elizabethdavis-emdr.com/wp-content/uploads/2019/02/hands.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 5px 5px 10px black;
        :hover {
          box-shadow: 2px 2px 5px black;
        }
        .art-copy {
          position: relative;
          z-index: 10;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem 3rem;
          h3 {
            margin-bottom: 0;
          }
          p {
            text-align: center;
          }
        }
        .darken-overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0,0,0,0.6);
        }
      }
      .sensorimotor-div {
        width: 100%;
        height: 100%;
        background-image: url(https://testing.elizabethdavis-emdr.com/wp-content/uploads/2018/09/Sensorimotor-Psychotherapy.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 5px 5px 10px black;
        :hover {
          box-shadow: 2px 2px 5px black;
        }
        .sensorimotor-copy {
          position: relative;
          z-index: 10;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem 3rem;
          h3 {
            margin-bottom: 0;
          }
          p {
            text-align: center;
          }
        }
        .darken-overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0,0,0,0.6);
        }
      }
    }
  }

  .row-2 {
    margin: 3rem 0;
    display: flex;
    flex-wrap: nowrap;
    height: 15rem;
    .spacer-div {
      width: 4%;
    }
    a {
      width: 48%;
      height: 100%;
      position: relative;
      text-decoration: none;
      .play-div {
                width: 100%;
        height: 100%;
        background-image: url(https://testing.elizabethdavis-emdr.com/wp-content/uploads/2018/08/5b58f567a671d7836b58705f_shutterstock_425325679.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 5px 5px 10px black;
        :hover {
          box-shadow: 2px 2px 5px black;
        }
        .play-copy {
          position: relative;
          z-index: 10;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem 3rem;
          h3 {
            margin-bottom: 0;
          }
          p {
            text-align: center;
          }
        }
        .darken-overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0,0,0,0.6);
        }
      }
      .pc-div {
                width: 100%;
        height: 100%;
        background-image: url(https://testing.elizabethdavis-emdr.com/wp-content/uploads/2018/09/numbers.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 5px 5px 10px black;
        :hover {
          box-shadow: 2px 2px 5px black;
        }
        .pc-copy {
          position: relative;
          z-index: 10;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem 3rem;
          h3 {
            margin-bottom: 0;
          }
          p {
            text-align: center;
          }
        }
        .darken-overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0,0,0,0.6);
        }
      }
    }
  }
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

            <div className="emdr-row">
              <div className="darken-overlay" />
              <Link to={`/services#emdr`}>
                <div className="emdr-div">
                  <h3>EMDR</h3>
                  <p>EMDR (Eye Movement Desensitization and Reprocessing) is a psychotherapy that enables people to heal from the symptoms and emotional distress that are the result of disturbing life experiences.</p>
                </div>
              </Link>
            </div>

            <div className="row-1">
              <Link to={`/services#art-therapy`} className="art-link">
                <div className="art-div">  
                  <div className="art-copy">
                    <h3>Art Therapy</h3>
                    <p>Art therapy as an approach to treating mental health issues, is more than just engaging in arts and crafts. Art therapists, who are master level clinicians trained specifically in the use of expressive media, use art materials strategically and sensitively to aid the process of work for healing.</p> 
                  </div>                                 
                  <div className="darken-overlay" />
                </div>                
              </Link> 
              <div className="spacer-div" />             
              <Link to={`/services#sensorimotor-therapy`}>                  
                <div className="sensorimotor-div">  
                  <div className="sensorimotor-copy">
                    <h3>Sensorimotor Therapy</h3>
                    <p>Our nervous system and habitual patterns of movement and posture tell the story of our experience and conditioning. Trained clinicians use mindful tracking of the body, as well as trauma resolution methods to help clients process through stuck traumatic states.</p> 
                  </div>                                 
                  <div className="darken-overlay" />
                </div>
              </Link>
            </div>

            <div className="row-2">
              <Link to={`/services#play-therapy`}>
                <div className="play-div">  
                  <div className="play-copy">
                    <h3>Play Therapy</h3>
                    <p>Play therapy is primarily used to help children ages 3 to 12, although it is sometimes used with adults.  Therapeutic play takes place in a safe, comfortable room with open opportunities to explore, thus encouraging free expressing and enabling the therapist to observe the client’s choices, decisions, and play style.</p> 
                  </div>                                 
                  <div className="darken-overlay" />
                </div>                
              </Link> 
              <div className="spacer-div" />             
              <Link to={`/services#progressive-counting`}>                  
                <div className="pc-div">  
                  <div className="pc-copy">
                    <h3>Progressive Counting (PC)</h3>
                    <p>Progressive Counting (PC) is a specialized procedure for resolving trauma or loss.  With PC, the client visualizes a series of progressively longer “movies’ of the trauma memory while the therapist counts out loud. </p> 
                  </div>                                 
                  <div className="darken-overlay" />
                </div>
              </Link>
            </div>

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
