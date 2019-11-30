import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'

import Card from '../Card'
import Title from '../Title'
import Subtitle from '../Subtitle'
import SmallTitle from '../SmallTitle'

const aliceOptions = {
   mouseTrackingEnabled: true,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 2
      },
      1024: {
         items: 3
      },
      1700: {
         items: 5
      }
   },
   buttonsDisabled: true
}

const WhatWeDo = ({ data }) => (
   <section className="section">
      <div className="container">
         <Title>{data.title}</Title>
         <Subtitle>{data.subtitle}</Subtitle>
         <div className="section">
            <AliceCarousel {...aliceOptions}>
               {data.features.map(feature => (
                  <FeatureWrapper key={feature.title}>
                     <FeatureCard>
                        <img src={feature.icon} alt="" />
                        <SmallTitle>{feature.title}</SmallTitle>
                        <p>{feature.caption}</p>
                     </FeatureCard>
                  </FeatureWrapper>
               ))}
            </AliceCarousel>
         </div>
      </div>
   </section>
)

export default WhatWeDo

const FeatureWrapper = styled.div`
   display: inline-block;
   height: 275px;
   @media (max-width: 600px) {
      height: 250px;
   }
`

const FeatureCard = styled(Card)`
   height: 100%;
   margin-top: 0;
   margin-bottom: 0;
`
