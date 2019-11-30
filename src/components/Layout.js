import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

import colors from '../constants/colors'

import './styles.scss'
import useSiteMetadata from './SiteMetadata'
import Navbar from './Navbar'
import ChangeLocaleBtns from './ChangeLocaleBtns'

import ogImg from '../img/og-img.png'
import ogImgEn from '../img/og-img-en.png'

const TemplateWrapper = ({ i18n, children }) => {
   const { title, description, titleEn, descriptionEn } = useSiteMetadata()
   return (
      <React.Fragment>
         <Helmet>
            <html lang="en" />
            <title>{i18n === 'en' ? titleEn : title }</title>
            <meta name="description" content={i18n === 'en' ? descriptionEn : description } />
            <meta name="theme-color" content={colors.BG} />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={i18n === 'en' ? titleEn : title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content={i18n === 'en' ? ogImgEn : ogImg} />
         </Helmet>
         <div id="outer-container">
            <Navbar i18n={i18n} />
            <main id="page-wrap">{children}</main>
            <ChangeLocaleBtns i18n={i18n} />
         </div>
         <GlobalStyle />
      </React.Fragment>
   )
}

const GlobalStyle = createGlobalStyle`
  html {
   font-family: soleil, sans-serif;
   font-weight: 300;
  }
  body {
     font-size: 1.6rem;
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
