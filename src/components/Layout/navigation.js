import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaCaretDown } from 'react-icons/fa'

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  background: #323232;
  .menu-item {
    position: relative;
    text-decoration: none;
    padding: .75rem 1rem;
    color: white;
    font-family: 'Source Sans Pro',sans-serif;
    :hover {
      background: black;
    }
  }
  .service-item {
    position: relative;
    a {      
      text-decoration: none;
      color: white;
      font-family: 'Source Sans Pro',sans-serif;
      :hover {
        background: black;
      }
    }
    .service-drop {
      background: #323232;
      padding: 15px 5px;
    }
  }
`

const Navigation =  () => {
  const [serviceOpen, setServiceOpen] = useState(false)
  const toggleServiceDrop = () => {
    setServiceOpen(!serviceOpen)
  }
  const dropClosedStyle = {
    position: 'absolute',
    top: '-10rem',
    opacity: 0,
    transition: 'all 0.5s ease'
  }
  const dropOpenStyle = {
    position: 'absolute',
    top: '100%',
    opacity: 1,
    transition: 'all 0.5s ease'
  }
  return (
    <Wrap>
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/about-me">About Me</Link>
      <div className="service-item">
        <Link to="/clinical-services">
          {`Services `}
          <button onClick={() => toggleServiceDrop()}>
            <FaCaretDown />
          </button>
        </Link>
        <div className="service-drop" style={serviceOpen ? dropOpenStyle : dropClosedStyle}>
          service drop
        </div>
      </div>
      <Link className="menu-item" to="/">Contact</Link>
      <Link className="menu-item" to="/">Other Pages?</Link>
    </Wrap>
  )
}

export default Navigation