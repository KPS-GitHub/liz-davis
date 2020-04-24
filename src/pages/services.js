import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import Helmet from 'react-helmet'
 
const ContentDiv = styled.div`
  margin: 5vw 0 15vw 0;
  h1 {
    text-align: center;
  }
  .service-wrap {
    margin: 5vw 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title-wrap {
      width: 100%;
      height: 15rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 5rem;
      position: relative;
      h3 {
        position: relative;
        z-index: 10;
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
    .service-copy {
      margin: 2vw 10vw;
    }
    .bold {
      font-weight: bold;
    }
  }
  #emdr {
    .title-wrap {
      background-image: url(https://testing.elizabethdavis-emdr.com/wp-content/uploads/2018/08/Eye-Movement-Desensitization-and-Reprocessing-EMDR-for-PTSD.jpg);
      background-repeat: no-repeat;
      background-position: 0% 20%;
      background-size: cover;
    }
  }
  #art-therapy {
    .title-wrap {
      background-image: url(https://testing.elizabethdavis-emdr.com/wp-content/uploads/2019/02/early-header-additions-7-e1549736287661.png);
      background-repeat: no-repeat;
      background-position: 0% 20%;
      background-size: cover;
    }
  }
}
`
 
const ServicePage = props => {
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

        <h1>Services</h1>

        <div id="emdr" className="service-wrap">
          <div className="title-wrap">
              <h3>EMDR</h3>
            <div className="darken-overlay" />
          </div>
          <div className="service-copy">
            <div className="content-wrap">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus. Justo eget magna fermentum iaculis eu non diam phasellus. Fames ac turpis egestas maecenas. Est ante in nibh mauris cursus mattis molestie a. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Tincidunt id aliquet risus feugiat in ante metus. Scelerisque eleifend donec pretium vulputate. Aliquet porttitor lacus luctus accumsan tortor posuere. Venenatis a condimentum vitae sapien pellentesque habitant. Curabitur gravida arcu ac tortor. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Iaculis urna id volutpat lacus laoreet non. Pellentesque habitant morbi tristique senectus et netus et. Maecenas sed enim ut sem viverra aliquet eget sit. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Elit pellentesque habitant morbi tristique senectus et netus. Sit amet mauris commodo quis imperdiet massa. Pellentesque sit amet porttitor eget dolor morbi non arcu.</p>
            </div>
          </div>
        </div>

        <div id="art-therapy" className="service-wrap">          
          <div className="title-wrap">
              <h3>Art Therapy</h3>
            <div className="darken-overlay" />
          </div>
          <div className="service-copy">
            <div className="content-wrap">
              <p>In addition to EMDR Elizabeth Davis offers Art therapy. The act of making art is understood by most to be naturally therapeutic. After all, making art is fun and fulfilling in and of itself. The end products are valued as they speak to our view of the world, our aesthetic, and ourselves.</p>
              <p>However, Art therapy as an approach to treating mental health issues, is more than just engaging in arts and crafts. Art therapists, who are master level clinicians trained specifically in the use of expressive media, use art materials strategically and sensitively to aid the process of work for healing. My informal definition of art therapy is the utilization of art media and art processes within the therapeutic relationship to:</p>
              <ul>
                <li>Improve coping</li>
                <li>Explore experience, (both internal and external), beliefs, and goals</li>
                <li>Practice mindful awareness and presence to promote emotional wellbeing</li>
                <li>Engage in group or family support to promote healing and insight</li>
              </ul>
              <p>Art therapy has long played a particularly useful role in the treatment of trauma and trauma related issues. The neuroscientist and trauma expert, Bruce Perry has noted, “Expressive arts has played a central and essential role historically in the processing of traumatic stress and loss.” (Perry, B., 2015). From the cave walls to the cathedrals to the inner-city murals, art seems to play a role in naturally processing difficult human experience. Some neuroscientists and other researchers have begun to understand more about how expressive arts work to help heal trauma.</p>
              <p className="bold">Theories about art making and the brain state that engages in expressive arts:</p>
              <ul>
                <li>Mobilizes and accesses sensory memories, (Steele & Raider, 2001) in a way that verbal interviews cannot</li>
                <li>Taps into limbic system areas of the brain – the seat of survival instincts and reflexes</li>
                <li>Strongly relates to the right hemisphere – the part of the brain mediating attachment, (Siegel, 1999, Shore, 2003)</li>
                <li>May help bridge explicit, (sensory) memory, and declarative, (explicit) memory, through narrative creation</li>
                <li>May help bring together, thinking, feeling, and meaning making, helping with cognitive integration</li>
              </ul>
              <p>These theories point to art therapy as an approach that may engage the brain in processing traumatic experiences more efficiently and more holistically than can be done alone verbally. Additionally, clinical studies have demonstrated solidly that art making can tap the body’s natural relaxation response. Relaxation leads to more open and productive engagement in therapy. Positive feelings associated with art making and repetitive reward driven creativity have been shown to decrease depression and anxiety, (Lambert, 2010)*.</p>
              <p>So why is it we don’t see art – making more than we do in conventional therapy? It is because Art therapy is not harmless to integrate and not just anyone can do it. Clients may decompensate, dissociate using art materials, and feel worse due to beliefs about performance. A lack of understanding of the experience of using certain art materials may re-traumatize or trigger clients. Therefore, Art therapy is most safe when introduced by an art therapist who is trained in the types of art experiences that are right for the specific issues and needs of clients.</p>
              <p>Who might benefit most from an art therapy approach to treating trauma? For those with complex trauma, art therapy offers an alternative way to communicate feelings and experiences. For children with developmental or emotional disabilities, brain injury, or dementia, Art therapy offers an alternative where verbal therapy is naturally limited.</p>
              <p>I specialize in the integration of expressive therapy and trauma focused treatment. My practice integrates strategic art therapy as a way to help clients manage and contain trauma memories, related feelings, process through painful memories, and develop post traumatic growth through finding meaning and connection with others.</p>
              <p className="bold">For more information on the practice of Art therapy go to <a href="arttherapy.org/about/">arttherapy.org/about/</a></p>
              <p>References:</p>
              <p>Fonagy P. (2012) Art Therapy and Personality Disorder, International Journal of Art Therapy, 17:3, 90, DOI: 10.1080/17454832.2012.740866</p>
              <p>Hass-Cohen, N. and Clyde Findlay, J.  (2015).  Art therapy and the neuroscience of relationships, creativity, and resiliency: skills and practices, (1st Edition).  New York:  W. W. Norton & Company, Inc.</p>
              <p>Malchiodi, C. A. (2012). Handbook of art therapy, (Second edition). New York: The Guilford Press.</p>
              <p>Perry, B. (2015). Forward. Malchiodi, C. A.  Creative interventions with traumatized children: Second edition.  New York: The Guilford Press.</p>
              <p>Steele, W., Raider, M. 2009.  Structured Sensory Interventions for Traumatized Children, Adolescents, and Parents. New York:</p>
            </div>
          </div>          
        </div>

        <div className="service-wrap">
          <img src="" alt="" />
          <h3 id=""></h3>
          <div className="content-wrap">
            <p></p>
          </div>
        </div>

        <div className="service-wrap">
          <img src="" alt="" />
          <h3 id=""></h3>
          <div className="content-wrap">
            <p></p>
          </div>
        </div>

        <div className="service-wrap">
          <img src="" alt="" />
          <h3 id=""></h3>
          <div className="content-wrap">
            <p></p>
          </div>
        </div>

      </ContentDiv>
    </Layout>
  )
}
 
export default ServicePage