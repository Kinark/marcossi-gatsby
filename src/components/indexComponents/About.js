import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Title from '../Title'
import Subtitle from '../Subtitle'
import MDP from '../MDP'
import ResponsiveImg from '../ResponsiveImg'
import { ButtonLink } from '../Button'

const About = () => {
   const { markdownRemark } = useStaticQuery(graphql`
      query AboutQuery {
         markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
            frontmatter {
               logo {
                  publicURL
               }
               about {
                  description
                  sectionTitle
                  title
                  section1 {
                     description
                     title
                     image {
                        publicURL
                     }
                  }
                  section2 {
                     image {
                        publicURL
                     }
                     title
                     description
                  }
                  section3 {
                     description
                     title
                     image {
                        publicURL
                     }
                  }
               }
            }
         }
      }
   `)
   const { frontmatter } = markdownRemark
   const { about } = frontmatter
   return (
      <section className="section padded" id="about">
         <div className="container">
            <div className="center">
               <Title>{about.sectionTitle}</Title>
               <div className="section">
                  <ResponsiveImg inline maxWidth="235" src={frontmatter.logo.publicURL} alt="" />
               </div>
               <div className="section">
                  <Subtitle dangerouslySetInnerHTML={{ __html: about.title }} />
                  <MDP>{about.description}</MDP>
                  <ButtonLink to="/#contact">Vamos conversar!</ButtonLink>
               </div>
            </div>

            <div className="section">
               <div className="row xs-middle">
                  <div className="col xs12 l6">
                     <ResponsiveImg inline maxWidth="700" src={about.section1.image.publicURL} alt="" />
                  </div>
                  <div className="col xs12 l6">
                     <Subtitle dangerouslySetInnerHTML={{ __html: about.section1.title }} />
                     <MDP>{about.section1.description}</MDP>
                  </div>
               </div>
            </div>

            <div className="section">
               <div className="row xs-middle">
                  <div className="col xs12 l6">
                     <Subtitle dangerouslySetInnerHTML={{ __html: about.section2.title }} />
                     <MDP>{about.section2.description}</MDP>
                  </div>
                  <div className="col xs12 l6 xs-first l-last right-align center-on-med-and-down">
                     <ResponsiveImg inline maxWidth="475" src={about.section2.image.publicURL} alt="" />
                  </div>
               </div>
            </div>

            <div className="section">
               <div className="row xs-center section padded no-pad-top">
                  <div className="col xs12 l6 center">
                     <ResponsiveImg inline maxWidth="375" src={about.section3.image.publicURL} alt="" />
                     <Subtitle dangerouslySetInnerHTML={{ __html: about.section3.title }} />
                     <MDP className="no-mrg">{about.section3.description}</MDP>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
