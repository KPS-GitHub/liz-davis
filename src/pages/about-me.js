import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import Helmet from 'react-helmet'
 
const ContentDiv = styled.div`
  margin: 5vw 10vw 15vw 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 25%;
  }
`
 
const AboutMe = props => {
  return (
    <Layout>
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
              }
            `}</style>
          </Helmet>
      <ContentDiv>
        <img src="https://testing.elizabethdavis-emdr.com/wp-content/uploads/2020/04/elizabeth-davis.jpeg" alt="Elizabeth Davis headshot" />
        
        <h1>About Me</h1>

        <div className="content-wrap">
          <p>I’m a board certified, New York State licensed art therapist with 20 years experience working in the field of creative arts therapy and trauma.</p>
          <p>Before becoming a creative arts therapist, I attained my master’s in fine arts (MFA) with a concentration in photography. As an experimental art photographer whose focus has been on the relationship between human psychology and visual expression, it was a natural progression for me to come to the field of art therapy.</p>
          <p>I began my clinical practice as an art therapist providing direct services to children and families at multiple levels of care including onsite (wrap around); residential & outpatient settings; and school based services in Erie County, New York.</p>
          <p>From early on in my career as an art therapist, I have served as an advocate and educator representing the needs of my clients in the field of creative arts therapy, which has historically been poorly understood and misrepresented. This diverse background has led me to an integrative approach for treating trauma. I have extensive training in the following areas.</p>
          <ul>
            <li>Mindfulness-Based Stress Reduction (MBSR)</li>
            <li>Sensorimotor Psychotherapy (SP)</li>
            <li>Progressive Counting (PC)</li>
            <li>Structured Sensory Interventions for Children, Adolescents and Parents (SITCAP-ARTS)</li>
            <li>Solution-Focused Trauma Informed Care (SF-TIC)</li>
            <li>Play Therapy</li>
          </ul>
          <p>I am EMDR certified as well as a consultant and trainer through EMDRIA. Additionally, I have offered numerous lectures on art therapy and its integration into various aspects of client trauma treatment. My main focus has been the use of art and creativity as an avenue for broadening the effectiveness of trauma-focused treatment for diverse and complex populations.</p>
          <p>Currently I serve as the Director of the Trauma Institute (TI) & Child Trauma Institute’s (CTI) satellite office in Buffalo, New York. TI&CTI is a non-profit organization devoted to researching and implementing the best possible trauma treatments.  I am involved with training, consultation, outcome studies, and intensive trauma therapy.</p>
        </div>

      </ContentDiv>
    </Layout>
  )
}
 
export default AboutMe