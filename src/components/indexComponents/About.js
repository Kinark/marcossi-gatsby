import React from 'react'

import Title from '../Title'
import Subtitle from '../Subtitle'
import MDP from '../MDP'
import ResponsiveImg from '../ResponsiveImg'
import { ButtonLink } from '../Button'

const About = props => {
   const { data, logo } = props
   return (
      <section className="section padded" id="about">
         <div className="container">
            <div className="center">
               <Title>{data.sectionTitle}</Title>
               <div className="section">
                  <ResponsiveImg inline maxWidth="235" src={logo.publicURL} alt="" />
               </div>
               <div className="section">
                  <Subtitle dangerouslySetInnerHTML={{ __html: data.title }} />
                  <MDP>{data.description}</MDP>
                  <ButtonLink to="/#contact">Vamos conversar!</ButtonLink>
               </div>
            </div>

            <div className="section">
               <div className="row xs-middle">
                  <div className="col xs12 l6">
                     <ResponsiveImg inline maxWidth="700" src={data.section1.image.publicURL} alt="" />
                  </div>
                  <div className="col xs12 l6">
                     <Subtitle dangerouslySetInnerHTML={{ __html: data.section1.title }} />
                     <MDP>{data.section1.description}</MDP>
                  </div>
               </div>
            </div>

            <div className="section">
               <div className="row xs-middle">
                  <div className="col xs12 l6">
                     <Subtitle dangerouslySetInnerHTML={{ __html: data.section2.title }} />
                     <MDP>{data.section2.description}</MDP>
                  </div>
                  <div className="col xs12 l6 xs-first l-last right-align center-on-med-and-down">
                     <ResponsiveImg inline maxWidth="475" src={data.section2.image.publicURL} alt="" />
                  </div>
               </div>
            </div>

            <div className="section">
               <div className="row xs-center section padded no-pad-top">
                  <div className="col xs12 l6 center">
                     <ResponsiveImg inline maxWidth="375" src={data.section3.image.publicURL} alt="" />
                     <Subtitle dangerouslySetInnerHTML={{ __html: data.section3.title }} />
                     <MDP className="no-mrg">{data.section3.description}</MDP>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
