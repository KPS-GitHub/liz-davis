import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import Navigation from './navigation'
import Img from 'gatsby-image'


const WrapCont = styled(Container)`
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
    }
  `)
  console.log(data)
  const { logo } = data

  return (
    <WrapCont>
      <div className="logo-wrap">
        <Link to={`/`}><Img fluid={logo.fluid} alt={logo.description} /></Link> 
      </div>
      <Navigation />
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
    </WrapCont>
  )
}

export default Layout
