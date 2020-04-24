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
      font-size: 4rem;
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
      h5 {
        font-size: 1.5rem;
        text-align: center;
      }
      p, ul {
        line-height: 22px;
      }
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
  #sensorimotor-therapy {
    .title-wrap {
      background-image: url(https://testing.elizabethdavis-emdr.com/wp-content/uploads/2018/09/Sensorimotor-Psychotherapy.jpg);
      background-repeat: no-repeat;
      background-position: 0% 20%;
      background-size: cover;
    }
  }
  #play-therapy {
    .title-wrap {
      background-image: url(https://testing.elizabethdavis-emdr.com/wp-content/uploads/2018/08/5b58f567a671d7836b58705f_shutterstock_425325679.jpg);
      background-repeat: no-repeat;
      background-position: 0% 72%;
      background-size: cover;
    }
  }
  #progressive-counting {
    .title-wrap {
      background-image: url(https://testing.elizabethdavis-emdr.com/wp-content/uploads/2018/09/numbers.jpg);
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

        <div id="sensorimotor-therapy" className="service-wrap">
          <div className="title-wrap">
              <h3>Sensorimotor Therapy</h3>
            <div className="darken-overlay" />
          </div>
          <div className="service-copy">
            <div className="content-wrap">
              <p>Sensorimotor psychotherapy is essentially body-based talk therapy. </p>
              <p>This therapy approach sees the body as having an innate source of intelligence as well as holding the recordings of experiences.  Our nervous system and habitual patterns of movement and posture tell the story of our experience and conditioning. Trained clinicians use mindful tracking of the body, as well as trauma resolution methods to help clients process through stuck traumatic states.</p>
              <p>Sensorimotor psychotherapy therapy benefits people who are struggling with anxiety, depression, anger management, PTSD, an inability to sustain meaningful relationships, and more.  It enables them to self-regulate effect and to become less reactive and more proactive in their relationships, work, and families.</p>
              <p>The ultimate goal of sensorimotor therapy is to transform traumatic memories into strengths and resources for the client.  It can be used as a first-choice approach, or it can be a very effective adjunct to an EMDR- or PC-based intensive therapy retreat.</p>
              <p className="bold">As a trauma therapist who specializes in the integration of trauma resolution methods, I work with my clients to determine if a sensorimotor approach will help them with their specific needs.  In most of the work I do as an EMDR, and PC therapist, I integrate sensorimotor psychotherapy to increase the effectiveness of these proven trauma resolutions approaches. In some cases, I use sensorimotor as a first approach, especially when my client is overwhelmed and sensitive to emotional flooding. Additionally, clients may find beginning with a body based processing approach more gentile and manageable.</p>
              <p className="bold">For more information, visit <a href="www.sensorimotorpsychotherapy.org">www.sensorimotorpsychotherapy.org</a>.</p>
            </div>
          </div>
        </div>

        <div id="play-therapy" className="service-wrap">
          <div className="title-wrap">
              <h3>Play Therapy</h3>
            <div className="darken-overlay" />
          </div>
          <div className="service-copy">
            <div className="content-wrap">
              <h5>Structural & Therapeutic Play Therapy</h5>
              <p>Structured play therapy is a directive style of play therapy that guides the child through play to address traumatic memories so that they can be processed, and the child heal.</p>
              <p>Play therapy is primarily used to help children ages 3 to 12, although it is sometimes used with adults.  Therapeutic play takes place in a safe, comfortable room with open opportunities to explore, thus encouraging free expressing and enabling the therapist to observe the client’s choices, decisions, and play style.</p>
              <p>Children with social or emotional deficits benefit from play therapy and learn to communicate better, change their behavior, develop problem-solving skills, and relate to others more effectively.  It is effective in helping children with academic and social problems, learning disabilities, behavioral disorders, anxiety, depression, grief, or anger as well as those with ADD or who are on the autism spectrum.</p>
              <p>Play therapy is often integrated into EMDR therapy or PC as a powerful strategy for helping children heal from traumatic experience. Additionally, this therapy modality is ideal for helping children learn emotional regulation skills, develop insight, and create feelings of safety, that are needed before trauma healing can begin.</p>
              <p>When I work with children initially, I partner with parents and caregivers to establish a thorough understanding of the challenges the child is facing, history of the symptoms and a detailed assessment. My focus is on understanding the root cause of the child’s symptoms, whether it is anxiety, behavioral in nature, or school based.   In our playroom I work with the child, and sometimes with the child and caregiver, to develop an increased feeling of esteem, safe attachment, and skills and tools to express emotions and beliefs.  The use of sand tray, puppetry, and pretend play is used as a part of the child’s natural language and process for developing these skills and working through hard issues and challenges. With strong caregiver involvement, I help families develop comprehensive approaches that they take home and utilize to enable the parent and/or caregiver to become healing agents in their child’s life.</p>
              <h5>Sand Therapy</h5>
              <p>Sand Tray Therapy is a therapy that helps children and adults create distance in a safe and healthy way from their trauma experience. Sand tray therapy can be integrated with EMDR and Parts work, to help children and adults reprocess their trauma in a way that feels safer or seems developmentally appropriate. In addition to creating distance to the trauma memory, sand tray work can help clients develop insight, through the development of archetypal symbols that embody the meaning of their journey, (Jungian psychotherapy)</p>
            </div>
          </div>
        </div>

        <div id="progressive-counting" className="service-wrap">
          <div className="title-wrap">
              <h3>Progressive Counting</h3>
            <div className="darken-overlay" />
          </div>
          <div className="service-copy">
            <div className="content-wrap">
              <p>Progressive Counting (PC) is a specialized procedure for resolving trauma or loss.  With PC, the client visualizes a series of progressively longer “movies’ of the trauma memory while the therapist counts out loud.  The “movie” of the trauma is meant to allow the client to get distance from the memory, understanding it as “a memory”, while at the same time thoroughly reviewing it and processing through any emotional blockages.  PC therapy always ends with positive or neutral endings where the client can come to better understanding the trauma is over and that they can move on.</p>
              <p>PC is about as effective as EMDR and typically doesn’t take quite as long as EMDR.  Both EMDR and PC are the best tolerated and most efficient of the proven-effective trauma healing methods.  Both methods successfully treat troubling symptoms such as anxiety, depression, guilt, anger, and post-traumatic reactions.  They also enhance confidence and self-esteem.</p>
              <p>PC Can help to enhance work-elated performance; reduce anxiety, anger, sadness, and other troubling emotions; overcome problem behaviors and habits; improve relationships; and help people to heal from trauma and loss.</p>
              <p>I may elect to use PC with my clients instead of EMDR due to the nature of a trauma memory, the ease of use for the client, (especially children), and the effectiveness of PC with “big T traumas”.  I find that PC is often more effective and more efficient. With both tools at my disposal, EMDR and PC, I can help my clients work through their traumatic past more effectively.</p>
            </div>
          </div>
        </div>

      </ContentDiv>
    </Layout>
  )
}
 
export default ServicePage