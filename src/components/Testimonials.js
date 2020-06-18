import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components'

const Wrap = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        margin-top: 2rem;
        margin-bottom: -2rem;
    }
    .carousel {
        width: 20%;
        .carousel__inner-slide {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        button {
            width: 50%;
            background: none;
            border: none;
            :hover {
              background: lightGray;
            }
        }
    }
`
 
export default class extends React.Component {
  render() {
    return (
        <Wrap>
            {/* <h3>Testimonials</h3> */}
            <CarouselProvider
                naturalSlideWidth={1000}
                naturalSlideHeight={1000}
                totalSlides={3}
            >
                <Slider>
                <Slide index={0}><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p><p>-Customer Name</p></Slide>
                <Slide index={1}><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p><p>-Customer Name</p></Slide>
                <Slide index={2}><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p><p>-Customer Name</p></Slide>
                </Slider>
                <ButtonBack>{`<`}</ButtonBack>
                <ButtonNext>{`>`}</ButtonNext>
            </CarouselProvider>
        </Wrap>
    );
  }
}