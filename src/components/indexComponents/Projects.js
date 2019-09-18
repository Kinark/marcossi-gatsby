import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import colors from '../../constants/colors'

import Card from '../Card'
import Title from '../Title'
import MDP from '../MDP'
import { ButtonLink, ButtonAnchor } from '../Button'

const Projects = props => {
   const { data, projects } = props
   const pathname = typeof window !== `undefined` ? window.location.pathname : ''
   const currentPath = pathname === '/' ? '' : pathname
   return (
      <section className="section padded" id="projects">
         <div className="container">
            <div className="section center no-pad-top">
               <Title>{data}</Title>
            </div>
            {projects.map(({ node }) => (
               <StyledCard key={node.frontmatter.title}>
                  <CardImg>
                     <StyledImg fluid={node.frontmatter.featuredimage.childImageSharp.fluid} />
                  </CardImg>
                  <CardContent>
                     <Title>{node.frontmatter.title}</Title>
                     <Excerpt>{node.frontmatter.excerpt}</Excerpt>
                     <ButtonLink to={currentPath + node.fields.slug}>Saiba mais</ButtonLink>
                     {!!node.frontmatter.externalLink && <ButtonAnchor href={node.frontmatter.externalLink}>Visite o site</ButtonAnchor>}
                  </CardContent>
               </StyledCard>
            ))}
         </div>
      </section>
   )
}

export default Projects

const StyledCard = styled(Card)`
   padding: 0;
   overflow: hidden;
   height: 400px;
   display: flex;
   align-items: center;
   @media (max-width: 767px) {
      height: auto;
      flex-direction: column;
   }
`

const CardImg = styled.div`
   position: relative;
   flex-basis: 45%;
   overflow: hidden;
   height: 100%;
   width: 100%;
   @media (max-width: 767px) {
      flex-basis: 260px;
   }
`

const StyledImg = styled(Img)`
   position: absolute !important;
   object-fit: cover !important;
   height: 100% !important;
   top: 0px !important;
   right: 0px !important;
   width: 100% !important;
   @media (max-width: 767px) {
      width: 100% !important;
      bottom: 0px !important;
      left: 0px !important;
      margin: auto !important;
   }
`

const CardContent = styled.div`
   text-overflow: ellipsis;
   flex-basis: 55%;
   margin: 35px;
`

const Excerpt = styled(MDP)`
   color: ${colors.ACCENT};
`
