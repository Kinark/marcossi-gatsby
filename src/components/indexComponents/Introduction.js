import React from 'react'
import styled from 'styled-components'

import colors from '../../constants/colors'
import eastwoodDone from '../../img/illustrations/eastwood-done.svg'

import Title from '../Title'
import Subtitle from '../Subtitle'
import ResponsiveImg from '../ResponsiveImg'
import FullHeight from '../FullHeight'
import { ButtonLink } from '../Button'

const Introduction = ({ subtitle, btn }) => {
   return (
      <FullPage>
         <FullHeight className="container" id="home">
            <FullHeightRow className="row xs-bottom">
               <div className="col xs12 xs-last l-first l4">
                  <Title bolder>Marcossi Design</Title>
                  <Subtitle>{subtitle}</Subtitle>
                  <ButtonLink to="/#contact">{btn}</ButtonLink>
               </div>
               <div className="col xs12 l8 center">
                  <ResponsiveImg inline maxWidth="955" src={eastwoodDone} alt="" />
               </div>
            </FullHeightRow>
         </FullHeight>
      </FullPage>
   )
}

export default Introduction

const FullHeightRow = styled(FullHeight)`
   @media (max-width: 991px) {
      align-content: flex-end;
   }
`

const FullPage = styled.section`
   height: 100vh;
   background-color: ${colors.SAND};
   padding-bottom: 10rem;
`
