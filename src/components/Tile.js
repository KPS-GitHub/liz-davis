import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrap = styled(Link)`
    text-decoration: none;
    // width: 47%;
    height: 13rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    .tile-div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100%;     
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 5px 5px 10px black;
        transform: scale(1); 
        transition: transform .5s ease;      
        :hover {
            transform: scale(1.1);
            transition: transform .5s ease;  
        }
        .copy {
            position: relative;
            z-index: 10;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h3 {
                margin: 0;
                text-align: center;
                font-size: 2rem;
                padding: 0 1rem;
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
    @media only screen and (max-width: 800px) {
        width: 100%;
        height: 10rem;
    }
`

const Tile = ({ title, linkTo, imgUrl }) => {
    // const targetId = title.toLowerCase().replace(/\s+/g, "-");
    return(
        <Wrap to={linkTo} className="link">
            <div className="tile-div" style={{backgroundImage: `url(${imgUrl})`}}>
                <div className="copy">
                    <h3>{title}</h3>
                    {/* <p>Art therapy as an approach to treating mental health issues, is more than just engaging in arts and crafts. Art therapists, who are master level clinicians trained specifically in the use of expressive media, use art materials strategically and sensitively to aid the process of work for healing.</p>  */}
                </div>
                <div className="darken-overlay" />
            </div>                
        </Wrap> 
    )
}

export default Tile