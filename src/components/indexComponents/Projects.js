import React from 'react'
import styled from 'styled-components'

import colors from '../../constants/colors'

import Card from '../Card'
import Title from '../Title'
import MDP from '../MDP'
import { ButtonLink, ButtonAnchor } from '../Button'

const Projects = props => {
   const { data, projects } = props
   const currentPath = window.location.pathname === '/' ? '' : window.location.pathname
   return (
      <section className="section padded" id="projects">
         <div className="container">
            <div className="section center no-pad-top">
               <Title>{data}</Title>
            </div>
            {projects.map(({ node }) => (
               <StyledCard key={node.frontmatter.title}>
                  <CardImg>
                     <img src={node.frontmatter.featuredimage.publicURL} alt="" />
                  </CardImg>
                  <CardContent>
                     <Title>{node.frontmatter.title}</Title>
                     <Excerpt>{node.frontmatter.excerpt}</Excerpt>
                     <ButtonLink to={currentPath + node.fields.slug}>Saiba mais</ButtonLink>
                     {!!node.frontmatter.externalLink && <ButtonAnchor to={node.frontmatter.externalLink}>Visite o site</ButtonAnchor>}
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
      height: 550px;
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
      height: 260px;
   }
   img {
      position: absolute;
      object-fit: cover;
      height: 100%;
      top: 0px;
      right: 0px;
      width: 100%;
      @media (max-width: 767px) {
         width: 100%;
         bottom: 0px;
         left: 0px;
         margin: auto;
      }
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
