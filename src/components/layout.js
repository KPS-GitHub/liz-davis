import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import Navigation from './navigation'
import Img from 'gatsby-image'


const WrapCont = styled(Container)`
  margin: 0;
  .logo-wrap {
    width: 45%;
    a {
      display: block;
      padding: 10px 0;
      .gatsby-image-wrapper {
        width: 100%;
      }
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
      {children}
    </WrapCont>
  )
}

export default Layout
