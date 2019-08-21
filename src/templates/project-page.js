import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Lightbox from 'react-image-lightbox'
import { graphql } from 'gatsby'

import colors from '../constants/colors'

import Layout from '../components/Layout'
import Card from '../components/Card'
import Title from '../components/Title'
import MDP from '../components/MDP'

export default class ProjectPage extends PureComponent {
   state = {
      photoIndex: 0,
      isOpen: false
   }

   render() {
      const { photoIndex, isOpen } = this.state
      const { frontmatter } = this.props.data.markdownRemark
      const images = frontmatter.gallery.map(el => el.image.publicURL)
      console.log(frontmatter)
      return (
         <Layout>
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
                        <img src={frontmatter.featuredimage.publicURL} alt="" />
                     </StyledCard>
                  </div>
                  <div className="col xs12 l6">
                     <Title>{frontmatter.title}</Title>
                     <Excerpt>{frontmatter.excerpt}</Excerpt>
                     <MDP>{frontmatter.description}</MDP>
                  </div>
               </div>
               <div className="section padded">
                  {frontmatter.gallery.map((el, i) => (
                     <React.Fragment key={el.image.publicURL}>
                        <StyledImg onClick={() => this.setState({ isOpen: true, photoIndex: i })} src={el.image.publicURL} alt="" />
                        <div className="row xs-center section padded no-pad-top">
                           <div className="col xs12 l6">
                              <MDP>{el.label}</MDP>
                           </div>
                        </div>
                     </React.Fragment>
                  ))}
               </div>
            </section>
         </Layout>
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

const StyledImg = styled.img`
   border-radius: 20px;
   width: 100%;
   cursor: pointer;
   transition: filter 250ms;
   &:hover {
      filter: brightness(75%);
   }
`

const Excerpt = styled(MDP)`
   color: ${colors.ACCENT};
`

export const pageQuery = graphql`
   query ProjectByID($id: String!) {
      markdownRemark(id: { eq: $id }) {
         frontmatter {
            title
            excerpt
            description
            date(formatString: "MMMM DD, YYYY")
            featuredimage {
               publicURL
            }
            externalLink
            gallery {
               image {
                  publicURL
               }
               label
            }
         }
      }
   }
`
