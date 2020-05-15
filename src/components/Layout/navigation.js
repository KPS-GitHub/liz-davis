import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  background: #323232;
  a {
    text-decoration: none;
    padding: .5rem 1rem;
    color: white;
    font-family: 'Source Sans Pro',sans-serif;
    :hover {
      background: black;
    }
  }
`

const Navigation =  () => (
  <Wrap>
    <Link to="/">Home</Link>
    <Link to="/about-me">About Me</Link>
    <Link to="/services">Clinical Services</Link>
    <Link to="/">Training</Link>
    <Link to="/">Professional Services</Link>
  </Wrap>
)

export default Navigation