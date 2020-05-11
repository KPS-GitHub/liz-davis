import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrap = styled(Link)`
    .tile-div {
        position: relative;
        width: 100%;
        height: 100%;        
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 5px 5px 10px black;
        :hover {
            box-shadow: 2px 2px 5px black;
        }
        .copy {
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