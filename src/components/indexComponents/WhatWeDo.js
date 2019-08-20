import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Card from '../Card'
import Title from '../Title'
import SmallTitle from '../SmallTitle'
import ResponsiveImg from '../ResponsiveImg'

const WhatWeDo = () => {
   const { markdownRemark } = useStaticQuery(graphql`
      query WhatWeDoQuery {
         markdownRemark {
            frontmatter {
               whatWeDo {
                  title
                  feature1 {
                     image {
                        publicURL
                     }
                     title
                     description
                  }
                  feature2 {
                     image {
                        publicURL
                     }
                     title
                     description
                  }
                  feature3 {
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
   const { whatWeDo } = frontmatter
   return (
      <section className="section padded">
         <div className="container center">
            <Card>
               <Title className="section padded">{whatWeDo.title}</Title>
               <div className="row xs-center section padded no-pad-top">
                  <div className="col xs12 l4 xl3">
                     <ResponsiveImg inline maxWidth="158" src={whatWeDo.feature1.image.publicURL} style={{ margin: '33px auto' }} alt="" />
                     <SmallTitle>{whatWeDo.feature1.title}</SmallTitle>
                     <p className="no-mrg">{whatWeDo.feature1.description}</p>
                  </div>
                  <div className="col xs12 l4 xl3">
                     <ResponsiveImg inline maxWidth="158" src={whatWeDo.feature2.image.publicURL} alt="" />
                     <SmallTitle>{whatWeDo.feature2.title}</SmallTitle>
                     <p className="no-mrg">{whatWeDo.feature2.description}</p>
                  </div>
                  <div className="col xs12 l4 xl3">
                     <ResponsiveImg inline maxWidth="158" src={whatWeDo.feature3.image.publicURL} alt="" />
                     <SmallTitle>{whatWeDo.feature3.title}</SmallTitle>
                     <p className="no-mrg">{whatWeDo.feature3.description}</p>
                  </div>
               </div>
            </Card>
         </div>
      </section>
   )
}

export default WhatWeDo
