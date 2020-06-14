import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Navigation from './navigation'
import Img from 'gatsby-image'


const WrapDiv = styled.div`
  margin: 0;
  font-family: 'Source Sans Pro',sans-serif;
  .logo-wrap {
    width: 45%;
    margin-left: 27.5%;
    a {
      display: block;
      padding: 10px 0;
      .gatsby-image-wrapper {
        width: 100%;
      }
    }
  }
  .hero-image {
    width: 100%;
    height: 8rem;
    background-image: url("https://testing.elizabethdavis-emdr.com/wp-content/uploads/2020/01/IMG_5949-scaled-e1578774848345-1600x533.jpg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }
  .footer {
    background: #323232;
    position: fixed;
    z-index: 1000;
    bottom: 0;
    width: 100%;
    .footer-links {
      width: 100%;
      display: flex;
      justify-content: center;
      background: #323232;
      a {
        color: white;
        display: block;
        padding: 20px;
        text-decoration: none;
      }
    }
    .footer-cpyrt {
      width: 100%;
      display: flex;
      justify-content: center;
      color: white;
      font-size: .8rem;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: contentfulAsset(title: {eq: "Official Logo"}) {
        title
        description
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      services: allContentfulService(sort: {fields: order, order: ASC}) {
        edges {
          node {
            title
          }
        }
      }
    }
  `)
  // console.log(data)
  const { logo, services } = data
  const servArr = services.edges.map(p => p.node);


  return (
    <WrapDiv>
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
            overflow: hidden;
          }
        `}</style>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      </Helmet>
      <div className="logo-wrap">
        <Link to={`/`}><Img fluid={logo.fluid} alt={logo.description} /></Link> 
      </div>
      <Navigation services={servArr} />
      <div className="hero-image" />
      {children}
      <div className="footer">
        <div className="footer-links">
          <Link to={`/`}>Home</Link>
          <Link to={`/`}>Contact</Link>
        </div>
        <div className="footer-cpyrt">
          <p>Copyright © 2020 Elizabeth Davis, MPA, MB, ART-BC, LCAT · All Rights Reserved</p>
        </div>
      </div>
    </WrapDiv>
  )
}

export default Layout
