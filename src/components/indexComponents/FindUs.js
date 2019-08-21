import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import colors from '../../constants/colors'

import Subtitle from '../Subtitle'
import ResponsiveImg from '../ResponsiveImg'

const FindUs = () => {
   const { markdownRemark } = useStaticQuery(graphql`
      query FindUsQuery {
         markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
            frontmatter {
               whereWeAre {
                  addressLabel
                  addressLine1
                  addressLine2
                  coords
                  description
                  title
                  image {
                     publicURL
                  }
               }
            }
         }
      }
   `)
   const { frontmatter } = markdownRemark
   const { whereWeAre } = frontmatter
   return (
      <section className="section padded">
         <div className="container">
            <div className="row xs-middle">
               <div className="col xs12 l6">
                  <Subtitle dangerouslySetInnerHTML={{ __html: whereWeAre.title }} />
                  <div>{whereWeAre.description}</div>
                  <Address>
                     <div className="row xs-middle no-mrg">
                        <div className="col xs12 l5">
                           <Subtitle className="no-mrg center-on-med-and-down">{whereWeAre.addressLabel}</Subtitle>
                        </div>
                        <div className="col xs12 l7 right-align center-on-med-and-down">
                           <div>{whereWeAre.addressLine1}</div>
                           <div>{whereWeAre.addressLine2}</div>
                        </div>
                     </div>
                  </Address>
                  <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.086568878095!2d-46.56104548507874!3d-23.130510784898544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec11cbd084531%3A0x51135047505e25cd!2sAlameda+Lorena%2C+65+-+Jardim+do+Lago%2C+Atibaia+-+SP%2C+12947-200!5e0!3m2!1spt-BR!2sbr!4v1566326336102!5m2!1spt-BR!2sbr" frameBorder="0" />
               </div>
               <div className="col xs12 l6 hide-on-med-and-down right-align">
                  <ResponsiveImg inline maxWidth="565" src={whereWeAre.image.publicURL} alt="" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default FindUs

const Map = styled.iframe`
   border-radius: 20px;
   border: 0;
   width: 100%;
   height: 260px;
   box-shadow: 0px 10px 15px 0px ${colors.SHADOW};
`

const Address = styled.div`
   border: dashed 3px ${colors.TITLE};
   border-radius: 20px;
   padding: 1rem;
   margin: 1rem 0;
`
