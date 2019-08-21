import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

import Title from '../Title'
import Subtitle from '../Subtitle'
import ResponsiveImg from '../ResponsiveImg'
import { ButtonLink } from '../Button'

const Introduction = () => {
   const { markdownRemark } = useStaticQuery(graphql`
      query IntroductionQuery {
         markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
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
   return (
      <Section>
         <div className="container">
            <div className="row xs-middle">
               <div className="col xs12 l5">
                  <ResponsiveImg inline maxWidth="158" src={frontmatter.logo.publicURL} alt="" />
                  <Title>{frontmatter.introduction.name}</Title>
                  <Subtitle dangerouslySetInnerHTML={{ __html: frontmatter.introduction.subtitle }} />
                  <div>{frontmatter.introduction.description}</div>
                  <ButtonLink to="/#contact">Vamos conversar!</ButtonLink>
               </div>
               <div className="col xs12 l7 hide-on-med-and-down right-align">
                  <ResponsiveImg inline maxWidth="463" src={frontmatter.introduction.image.publicURL} alt="" />
               </div>
            </div>
         </div>
      </Section>
   )
}

export default Introduction

const Section = styled.section`
   padding: 20vh 0 10vh;
`