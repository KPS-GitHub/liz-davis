import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaCaretDown } from 'react-icons/fa'

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  background: #323232;
  position: relative;
  .menu-item {
    position: relative;
    top: 0;
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
    width: 7rem;
    .drop-parent {      
      position: relative;
      top: 12px;
      padding: .75rem 1rem;
      text-decoration: none;
      color: white;
      font-family: 'Source Sans Pro',sans-serif;
      :hover {
        background: black;
      }
    }
    button {
      position: absolute;
      right: -3px;
      background: none;
      border: none;
      color: white;
      margin-top: 13px;
      :hover {
        cursor: pointer;
      }
      :focus {
        outline: none;
      }
    }
    .service-drop {
      position: absolute;
      width: 100%;
      background: #323232;
      display: flex;
      flex-direction: column;
      a {
        width: 92.1%;
        padding: .75rem 0 .75rem .5rem;
        text-decoration: none;
        color: white;
        font-family: 'Source Sans Pro',sans-serif;
        :hover {
          background: black;
        }
      }
    }
  }
`

const Navigation =  ({ services }) => {
  const [serviceOpen, setServiceOpen] = useState(false)
  const toggleServiceDrop = () => {
    setServiceOpen(!serviceOpen)
  }
  const dropClosedStyle = {
    position: 'absolute',
    zIndex: 0,
    top: '-20rem',
    opacity: 0,
    transition: 'all 0.5s ease'
  }
  const dropOpenStyle = {
    position: 'absolute',
    zIndex: 10,
    top: '100%',
    opacity: 1,
    transition: 'all 0.5s ease'
  }
  return (
    <Wrap>
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/about-me">About Me</Link>
      <div className="service-item">
        <Link to="/clinical-services" className="drop-parent">
          {`Services `}          
        </Link>
        <button onClick={() => toggleServiceDrop()}>
          <FaCaretDown />
        </button>
        <div className="service-drop" style={serviceOpen ? dropOpenStyle : dropClosedStyle}>
          {services.map((service, i) => {
            const servId = service.title.toLowerCase().replace(/\s+/g, '-');            
            return(
              <Link to={`/clinical-services#`+servId}>{service.title}</Link>
            )
          })}
        </div>
      </div>
      <Link className="menu-item" to="/">Contact</Link>
      <Link className="menu-item" to="/">Other Pages?</Link>
    </Wrap>
  )
}

export default Navigation