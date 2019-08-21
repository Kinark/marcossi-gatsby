import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Subtitle from '../Subtitle'
import ResponsiveImg from '../ResponsiveImg'
import MDP from '../MDP'

const Values = () => {
   const { markdownRemark } = useStaticQuery(graphql`
      query ValuesQuery {
         markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
            frontmatter {
               values {
                  value1 {
                     image {
                        publicURL
                     }
                     title
                     description
                  }
                  value2 {
                     image {
                        publicURL
                     }
                     title
                     description
                  }
                  value3 {
                     image {
                        publicURL
                     }
                     title
                     description
                  }
               }
            }
         }
      }
   `)
   const { frontmatter } = markdownRemark
   const { values } = frontmatter
   return (
      <section className="section padded">
         <div className="container ">
            <div className="row xs-middle section padded no-pad-top">
               <div className="col xs12 l6 left-align center-on-med-and-down">
                  <ResponsiveImg inline maxWidth="510" src={values.value1.image.publicURL} alt="" />
               </div>
               <div className="col xs12 l6">
                  <Subtitle dangerouslySetInnerHTML={{ __html: values.value1.title }} />
                  <MDP className="no-mrg">{values.value1.description}</MDP>
               </div>
            </div>

            <div className="row xs-middle section padded no-pad-top">
               <div className="col xs12 l6">
                  <Subtitle dangerouslySetInnerHTML={{ __html: values.value2.title }} />
                  <MDP className="no-mrg">{values.value2.description}</MDP>
               </div>
               <div className="col xs12 xs-first l-last l6 right-align center-on-med-and-down">
                  <ResponsiveImg inline maxWidth="425" src={values.value2.image.publicURL} alt="" />
               </div>
            </div>

            <div className="row xs-center section padded no-pad-top">
               <div className="col xs12 l6 center">
                  <ResponsiveImg inline maxWidth="375" src={values.value3.image.publicURL} alt="" />
                  <Subtitle dangerouslySetInnerHTML={{ __html: values.value3.title }} />
                  <MDP className="no-mrg">{values.value3.description}</MDP>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Values
