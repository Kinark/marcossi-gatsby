import React from 'react'
import styled from 'styled-components';

import Title from '../Title'
import Subtitle from '../Subtitle'
import ResponsiveImg from '../ResponsiveImg'
import { ButtonLink } from '../Button'

const Introduction = props => {
   const { logo, data } = props
   return (
      <Section>
         <div className="container" id="home">
            <div className="row xs-middle">
               <div className="col xs12 l5">
                  <ResponsiveImg inline maxWidth="158" src={logo.publicURL} alt="" />
                  <Title>{data.name}</Title>
                  <Subtitle dangerouslySetInnerHTML={{ __html: data.subtitle }} />
                  <div>{data.description}</div>
                  <ButtonLink to="/#contact">Vamos conversar!</ButtonLink>
               </div>
               <div className="col xs12 l7 hide-on-med-and-down right-align">
                  <ResponsiveImg inline maxWidth="463" src={data.image.publicURL} alt="" />
               </div>
            </div>
         </div>
      </Section>
   )
}

export default Introduction

const Section = styled.section`
   padding: 15vh 0 10vh;
`