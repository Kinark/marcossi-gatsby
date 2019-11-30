import React from 'react'
import styled from 'styled-components'

import colors from '../../constants/colors'
import maleFemale from '../../img/illustrations/male-female.svg'
import noComments from '../../img/illustrations/eastwood-no-comments.svg'
import fatalError from '../../img/illustrations/eastwood-fatal-error.svg'
import sucess from '../../img/illustrations/eastwood-success.svg'

import Title from '../Title'
import Subtitle from '../Subtitle'
import BigText from '../BigText'
import ResponsiveImg from '../ResponsiveImg'

const About = ({ data }) => (
   <AboutSection id="about">
      <div className="container">
         <div className="section padded no-pad-top">
            <div className="row xs-middle no-mrg-bot">
               <div className="col xs12 l4">
                  <Title>{data.title}</Title>
                  <Subtitle>{data.section1.subtitle}</Subtitle>
                  <DarkBigText>{data.section1.caption1}</DarkBigText>
                  <DarkBigText>{data.section1.caption2}</DarkBigText>
                  <DarkBigText>{data.section1.caption3}</DarkBigText>
               </div>
               <div className="col xs12 l8 xs-first l-last center">
                  <ResponsiveImg inline maxWidth="1069" src={maleFemale} alt="" />
               </div>
            </div>
         </div>

         <div className="section padded">
            <div className="row xs-middle no-mrg-bot">
               <div className="col xs12 l7 center">
                  <ResponsiveImg inline maxWidth="850" src={noComments} alt="" />
               </div>
               <div className="col xs12 l5">
                  <Subtitle>{data.section2.subtitle}</Subtitle>
                  <DarkBigText>{data.section2.caption1}</DarkBigText>
                  <DarkBigText>{data.section2.caption2}</DarkBigText>
                  <DarkBigText>{data.section2.caption3}</DarkBigText>
               </div>
            </div>
         </div>

         <div className="section padded">
            <div className="row xs-middle no-mrg-bot">
               <div className="col xs12 l5">
                  <Subtitle>{data.section3.subtitle}</Subtitle>
                  <DarkBigText>{data.section3.caption1}</DarkBigText>
                  <DarkBigText>{data.section3.caption2}</DarkBigText>
                  <DarkBigText>{data.section3.caption3}</DarkBigText>
               </div>
               <div className="col xs12 l7 xs-first l-last center">
                  <ResponsiveImg inline maxWidth="863" src={fatalError} alt="" />
               </div>
            </div>
         </div>

         <div className="section padded no-pad-bot">
            <div className="row xs-middle no-mrg-bot">
               <div className="col xs12 l7 center">
                  <ResponsiveImg inline maxWidth="850" src={sucess} alt="" />
               </div>
               <div className="col xs12 l5">
                  <Subtitle>{data.section4.subtitle}</Subtitle>
                  <DarkBigText>{data.section4.caption1}</DarkBigText>
                  <DarkBigText>{data.section4.caption2}</DarkBigText>
               </div>
            </div>
         </div>
      </div>
   </AboutSection>
)

export default About

const AboutSection = styled.section`
   background-color: ${colors.SAND};
   padding: 10rem 0;
`

const DarkBigText = styled(BigText)`
   color: ${colors.OCEAN};
`
