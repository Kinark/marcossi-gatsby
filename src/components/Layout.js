import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import { withPrefix } from 'gatsby'

import colors from '../constants/colors'

import './styles.scss'
import useSiteMetadata from './SiteMetadata'
import Navbar from './Navbar'

const TemplateWrapper = ({ i18n, bgImg, logo, children }) => {
   const { title, description, titleEn, descriptionEn } = useSiteMetadata()
   return (
      <React.Fragment>
         <Helmet>
            <html lang="en" />
            <title>{i18n === 'en' ? titleEn : title }</title>
            <meta name="description" content={i18n === 'en' ? descriptionEn : description } />
            <meta name="theme-color" content={colors.BG} />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
         </Helmet>
         <div id="outer-container">
            <Navbar i18n={i18n} logo={logo} />
            <Main id="page-wrap">{children}</Main>
         </div>
         <GlobalStyle bgImg={bgImg.publicURL} />
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
