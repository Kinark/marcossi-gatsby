import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import { withPrefix, graphql, useStaticQuery } from 'gatsby'

import colors from '../constants/colors'

import './styles.scss'
import useSiteMetadata from './SiteMetadata'
import Navbar from './Navbar'

const TemplateWrapper = ({ children }) => {
   const { markdownRemark } = useStaticQuery(graphql`
      query LayoutQuery {
         markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
               backgroundImage {
                  publicURL
               }
            }
         }
      }
   `)
   const { title, description } = useSiteMetadata()
   return (
      <React.Fragment>
         <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="theme-color" content={colors.BG} />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
         </Helmet>
         <div id="outer-container">
            <Navbar />
            <Main id="page-wrap">{children}</Main>
            <div className="screen-detector"></div>
         </div>
         <GlobalStyle bgImg={markdownRemark.frontmatter.backgroundImage.publicURL} />
      </React.Fragment>
   )
}

const Main = styled.main`
   padding-top: 5rem;
`

const GlobalStyle = createGlobalStyle`
  body {
   font-family: soleil, sans-serif;
   color: ${colors.BODY};
   font-size: 16px;
   background-color: ${colors.BG};
   background-image: url(${({ bgImg }) => bgImg});
   background-position: 56% 550px;
   background-repeat: no-repeat;
  }
  *:focus {
     outline: none;
  }
  .bm-burger-button {
      @media (min-width: 768px) {
         display: none;
      }
   }
`

export default TemplateWrapper
