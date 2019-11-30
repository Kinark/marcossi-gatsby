import React from 'react'
import styled from 'styled-components'

import eastwoodDownloading from '../../img/illustrations/eastwood-downloading.svg'
import map from '../../img/illustrations/map.svg'

import SectionTitle from '../SectionTitle'
import BigText from '../BigText'
import SmallTitle from '../SmallTitle'
import Card from '../Card'
import ResponsiveImg from '../ResponsiveImg'

const FindUs = ({ data }) => (
   <section className="section padded" id="findus">
      <div className="container">
         <div className="row xs-middle">
            <div className="col xs12 l6 center">
               <ResponsiveImg inline maxWidth="802" src={eastwoodDownloading} alt="" />
            </div>
            <div className="col xs12 l6">
               <SectionTitle>{data.title}</SectionTitle>
               <BigText>{data.caption}</BigText>
               <div className="row">
                  <div className="col xs12 l6">
                     <StyledCard className="center-on-med-and-down">
                        <div>
                           <img src={map} alt="" />
                        </div>
                        <SmallTitle className="no-mrg">{data.addressLabel}</SmallTitle>
                        <div>{data.addressLine1}</div>
                        <div>{data.addressLine2}</div>
                     </StyledCard>
                  </div>
                  <div className="col xs12 l6">
                     <Map
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.086568878095!2d-46.56104548507874!3d-23.130510784898544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec11cbd084531%3A0x51135047505e25cd!2sAlameda+Lorena%2C+65+-+Jardim+do+Lago%2C+Atibaia+-+SP%2C+12947-200!5e0!3m2!1spt-BR!2sbr!4v1566326336102!5m2!1spt-BR!2sbr"
                        frameBorder="0"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
)

export default FindUs

const Map = styled.iframe`
   border-radius: 15px;
   border: 0;
   width: 100%;
   height: 200px;
`

const StyledCard = styled(Card)`
   height: calc(100% - 1rem);
   margin: 0;
   margin-bottom: 1rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: left;
`
