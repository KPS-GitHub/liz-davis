import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import Navigation from './navigation'

const WrapCont = styled(Container)`
  margin: 0;
`

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <WrapCont>
        <Navigation />
        {children}
      </WrapCont>
    )
  }
}

export default Template
