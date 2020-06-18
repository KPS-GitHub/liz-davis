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
 
const ClinServOverview = props => {
  return (
    <Layout>
      <Wrap>
        <h1>Clinical Services</h1>
        <p>Our systems seek balance. The more unresolved trauma and stress in our lives the more we need strategies and resources to balance the stress load. Like the scale suggests, our nervous system will go into crisis mode if we have too few resources to achieve balance. With overwhelm we start to tip out of balance and can even launch into survival strategies like fight, flight, freeze, and shut down. Additionally, we often develop responses for how to deal with chronic states of overwhelm that can become a part of the overall problem, like addictions, bad habits, and poor self-care.  The full impact from overwhelming stress and trauma can often be felt long after the bad experiences are over resulting in anxiety, depression, rumination, hyper activity, lethargy, emotional dysregulation, nightmares, sleep loss, reactivity and jumpiness, health related issues and more.</p>
        <p>I work within a <a href="https://www.childtrauma.com/treatment/phase-model" target="_blank">phase model</a>, of trauma treatment that addresses getting that balance back. I use a personal trainer approach that helps clients learn to integrate healthy coping strategies and build resources with support and education around how the brain and body have adapted to crisis and stress. However, learning how to cope better is only the first step. Lasting change comes from dealing with what is causing the stuck crisis state in the first place, like traumatic memory or periods of prolonged stress.</p>
        <p>My approach to working through packed away trauma and stress is the intensive retreat format. In an intensive retreat, we work together several hours, or days at a time to address all the old toxic stuff at once. This saves time, does away with much of the skill building needed to manage symptoms, speeds up the recovery process and gets down to the business of healing faster.  Because we now have proven trauma resolution methods, like EMDR, Progressive Counting, Trauma-Focused CBT, Sensorimotor Psychotherapy, as well as integrated mindfulness, play, art, and expressive therapy approaches, we can get results faster, with less pain, and therefore help clients move on with their lives for good.</p>
        <p>Described in the links below are ways I am trained to help those overwhelmed by stress and trauma navigate out of crisis mode. Since we all are a little different and have different life experiences, I have multiple tools in my therapeutic toolbox. I specialize in the treatment of complex trauma and have worked with clients as young as three and as old as 82. Through the Trauma Institute, I also am involved in research and training to help others learn and use the most effective forms of trauma treatment.</p>
        <p>If you have any questions or would like to request a consultation reach out through the <Link to={`/contact`}>contact page</Link>.</p>
        <p>For more information on trauma and how it is best treated visit the International Society for the Treatment of Trauma and Dissociation’s website, <a href="https://www.isst-d.org" target="_blank">www.isst-d.org</a></p>
      </Wrap>
    </Layout>    
  )
}
 
export default ClinServOverview