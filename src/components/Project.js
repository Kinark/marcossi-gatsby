import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Lightbox from 'react-image-lightbox'
import Img from 'gatsby-image'

import colors from '../constants/colors'

import Card from './Card'
import Title from './Title'
import MDP from './MDP'

export default class Project extends PureComponent {
   state = {
      photoIndex: 0,
      isOpen: false
   }

   render() {
      const { photoIndex, isOpen } = this.state
      const { data } = this.props
      const images = data.gallery.map(el => el.image.publicURL)
      return (
         <React.Fragment>
            <Helmet>
               <title>{data.title}</title>
               <meta name="description" content={data.excerpt} />
            </Helmet>
            {isOpen && (
               <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                     this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length
                     })
                  }
                  onMoveNextRequest={() =>
                     this.setState({
                        photoIndex: (photoIndex + 1) % images.length
                     })
                  }
               />
            )}
            <section className="container">
               <div className="row xs-middle">
                  <div className="col xs12 l6">
                     <StyledCard>
                        <Img fluid={data.featuredimage.childImageSharp.fluid} />
                     </StyledCard>
                  </div>
                  <div className="col xs12 l6">
                     <Title>{data.title}</Title>
                     <Excerpt>{data.excerpt}</Excerpt>
                     <MDP>{data.description}</MDP>
                  </div>
               </div>
               <div className="section padded">
                  {data.gallery.map((el, i) => (
                     <React.Fragment key={el.image.publicURL}>
                        <div onClick={() => this.setState({ isOpen: true, photoIndex: i })}>
                           <StyledImg fluid={el.image.childImageSharp.fluid} />
                        </div>
                        <div className="row xs-center section padded no-pad-top">
                           <div className="col xs12 l6">
                              <MDP>{el.label}</MDP>
                           </div>
                        </div>
                     </React.Fragment>
                  ))}
               </div>
            </section>
         </React.Fragment>
      )
   }
}

const StyledCard = styled(Card)`
   padding: 0;
   font-size: 0;
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`

const StyledImg = styled(Img)`
   border-radius: 20px;
   /* width: 100%; */
   cursor: pointer;
   transition: filter 250ms;
   &:hover {
      filter: brightness(75%);
   }
`

const Excerpt = styled(MDP)`
   color: ${colors.ACCENT};
`
