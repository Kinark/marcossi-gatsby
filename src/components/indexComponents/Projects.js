import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import AliceCarousel from 'react-alice-carousel'

import arrowRight from '../../img/illustrations/arrow-right.svg'

import Card from '../Card'
import Title from '../Title'
import SmallTitle from '../SmallTitle'
import Subtitle from '../Subtitle'
import MDP from '../MDP'
import { ButtonLink, ButtonAnchor } from '../Button'

const aliceOptions = {
   fadeOutAnimation: true,
   mouseTrackingEnabled: true,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 2
      },
      1024: {
         items: 3
      },
      1700: {
         items: 4
      }
   },
   buttonsDisabled: true,
   infinite: false
}

const Projects = ({ data, projects }) => {
   const pathname = typeof window !== `undefined` ? window.location.pathname : ''
   const currentPath = pathname === '/' ? '' : pathname
   const handleOnDragStart = e => e.preventDefault()

   const projectsCardsArray = projects.map(({ node }) => (
      <StyledCard onDragStart={handleOnDragStart} key={node.frontmatter.title}>
         <CardImg>
            <StyledImg onDragStart={handleOnDragStart} fluid={node.frontmatter.featuredimage.childImageSharp.fluid} />
         </CardImg>
         <CardContent>
            <div>
               <SmallTitle className="no-mrg-bot">{node.frontmatter.title}</SmallTitle>
               <MDP className="no-mrg-top">{node.frontmatter.excerpt}</MDP>
            </div>
            <Buttons>
               <StyledButtonLink to={currentPath + node.fields.slug}>{data.learnMore}</StyledButtonLink>
               {!!node.frontmatter.externalLink && <StyledButtonAnchor href={node.frontmatter.externalLink}>{data.visitWebsite}</StyledButtonAnchor>}
            </Buttons>
         </CardContent>
      </StyledCard>
   ))
   projectsCardsArray.unshift(
      <FirstFakeCard onDragStart={handleOnDragStart}>
         <Title>{data.title}</Title>
         <Subtitle>{data.caption}</Subtitle>
         <img src={arrowRight} alt="" />
      </FirstFakeCard>
   )
   return (
      <section className="section padded" id="projects">
         <div className="container">
            <AliceWrapper>
               <AliceCarousel items={projectsCardsArray} {...aliceOptions} />
            </AliceWrapper>
         </div>
      </section>
   )
}

export default Projects

const Buttons = styled.div`
   display: flex;
   @media (max-width: 600px) {
      justify-content: center;
   }
`

const AliceWrapper = styled.div`
   @media (max-width: 600px) {
      .alice-carousel__stage-item {
         text-align: center;
      }
   }
`

const FirstFakeCard = styled.div`
   max-width: 388px;
   width: 100%;
   display: inline-block;
`

const StyledCard = styled(Card)`
   padding: 0;
   overflow: hidden;
   height: 440px;
   display: inline-flex;
   align-items: center;
   flex-direction: column;
   margin: 0 2rem;
   width: calc(100% - 4rem);
   /* text-align: left; */
`

const CardImg = styled.div`
   position: relative;
   flex-basis: 45%;
   overflow: hidden;
   height: 100%;
   width: 100%;
   flex-shrink: 0;
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
   padding: 1rem 2rem 2rem;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 100%;
`

const StyledButtonLink = styled(ButtonLink)`
   font-size: 1.6rem;
`

const StyledButtonAnchor = styled(ButtonAnchor)`
   font-size: 1.6rem;
`
