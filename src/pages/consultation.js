import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import { Link } from 'gatsby'
 
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3% 10% 10% 10%;
  p {
    width: 100%;
  }
  h1 {
    margin-bottom: 2rem;
  }
`
 
const ComponentName = props => {
  return (
    <Layout>
      <Wrap>
        <h1>Consultation</h1>
        <p>Elizabeth Davis offers EMDR consultation services for certification and consultant (CIT- consultant in training). These services are offered in person or via Zoom, (like Skype but secure). While my primary focus for consultation is providing services to those seeking EMDR certification, I do offer consultation for all professionals in the following areas:</p>
        <ul>
          <li>Art therapy and trauma</li>
          <li>Attachment and dissociation in adults and children</li>
          <li>Child sexual abuse</li>
          <li>Foster care and trauma impact</li>
          <li>Gang awareness and trauma</li>
          <li>IPV and domestic violence</li>
          <li>Learning/emotional disabilities</li>
          <li>Mindfulness Based Stress Reduction, (MBSR) and Art Therapy (MBAT)</li>
          <li>SITCAP- ARTS, Structured Sensory Interventions for Traumatized Children, Adolescents and Parents.</li>
        </ul>
        <p>For more information on consultation services visit the <a href="http://www.childtrauma.com/training/consultation/" target="_blank">Trauma Institute and Child Trauma Institute website</a>.</p>
      </Wrap>
    </Layout>
  )
}
 
export default ComponentName