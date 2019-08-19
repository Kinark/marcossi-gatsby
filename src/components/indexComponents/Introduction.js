import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Title from '../Title'
import Subtitle from '../Subtitle'

const Introduction = () => {
   const { markdownRemark } = useStaticQuery(graphql`
      query HeaderQuery {
         markdownRemark {
            frontmatter {
               logo {
                  publicURL
               }
               introduction {
                  image {
                     publicURL
                  }
                  description
                  name
                  subtitle
               }
            }
         }
      }
   `)
   const { frontmatter } = markdownRemark
   console.log(frontmatter)
   return (
      <section>
         <div className="container">
            <div className="row">
               <div className="col xs12 l6">
                  <img width="158" src={frontmatter.logo.publicURL} alt="" />
                  <Title>{frontmatter.introduction.name}</Title>
                  <Subtitle dangerouslySetInnerHTML={{ __html: frontmatter.introduction.subtitle }} />
                  <div>{frontmatter.introduction.description}</div>
               </div>
               <div className="col xs12 l6 hide-on-med-and-down">
                  {/* <img src={frontmatter.introduction.image.publicURL} alt="" /> */}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Introduction
