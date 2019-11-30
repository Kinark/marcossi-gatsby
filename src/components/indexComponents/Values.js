import React from 'react'
import styled from 'styled-components'

import colors from '../../constants/colors'
import orderCompleted from '../../img/illustrations/eastwood-order-completed.svg'
import duoMan from '../../img/illustrations/duo-man.svg'

import SectionTitle from '../SectionTitle'
import ResponsiveImg from '../ResponsiveImg'
import BigText from '../BigText'

const Values = ({ data }) => (
   <React.Fragment>
      <section className="section padded">
         <div className="container">
            <div className="row xs-middle section padded">
               <div className="col xs12 l6 center">
                  <ResponsiveImg inline maxWidth="665" src={orderCompleted} alt="" />
               </div>
               <div className="col xs12 l6">
                  <SectionTitle>{data.transparent.title}</SectionTitle>
                  <BigText>{data.transparent.caption1}</BigText>
                  <BigText>{data.transparent.caption2}</BigText>
               </div>
            </div>
         </div>
      </section>
      <OrangeSection className="section padded">
         <div className="container">
            <div className="row xs-middle no-mrg-bot">
               <div className="col xs12 l7 right-align">
                  <WhiteSectionTitle>{data.love.title}</WhiteSectionTitle>
                  <WhiteBigText>{data.love.caption1}</WhiteBigText>
                  <WhiteBigText>{data.love.caption2}</WhiteBigText>
               </div>
               <div className="col xs12 l5 xs-first l-last center">
                  <ResponsiveImg inline maxWidth="552" src={duoMan} alt="" />
               </div>
            </div>
         </div>
      </OrangeSection>
   </React.Fragment>
)

export default Values

const OrangeSection = styled.section`
   background-color: ${colors.LIMA};
   color: white !important;
`

const WhiteSectionTitle = styled(SectionTitle)`
   color: white;
`;

const WhiteBigText = styled(BigText)`
   color: white;
`;
