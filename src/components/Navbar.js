import React, { useState } from 'react'
import { elastic as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '../constants/colors'
import logo from '../img/illustrations/Logo.svg'

const Navbar = ({ i18n }) => {
   const [isMenuOpen, setMenuOpen] = useState(false)
   const linksPrefix = i18n ? '/en' : ''
   return (
      <React.Fragment>
         <Nav>
            <div className="container">
               <Link to={`${linksPrefix}/#`}>
                  <Logo src={logo} width="65" alt="" />
               </Link>
               <ul className="hide-on-small-and-down">
                  <li>
                     <Link to={`${linksPrefix}/#home`}>{i18n === 'en' ? 'Home' : 'Início'}</Link>
                  </li>
                  <li>
                     <Link to={`${linksPrefix}/#projects`}>{i18n === 'en' ? 'Projects' : 'Projetos'}</Link>
                  </li>
                  <li>
                     <Link to={`${linksPrefix}/#findus`}>{i18n === 'en' ? 'Find us' : 'Nos encontre'}</Link>
                  </li>
                  {/* <li><Link>Depoimentos</Link></li> */}
                  <li>
                     <Link to={`${linksPrefix}/#about`}>{i18n === 'en' ? 'About' : 'Sobre'}</Link>
                  </li>
                  <li>
                     <Link to={`${linksPrefix}/#contact`}>{i18n === 'en' ? 'Contact' : 'Contato'}</Link>
                  </li>
                  <li>
                     <a href="https://blog.marcossi.com" target="_blank">Blog</Link>
                  </li>
               </ul>
            </div>
         </Nav>
         <Menu
            isOpen={isMenuOpen}
            onStateChange={state => setMenuOpen(state.isOpen)}
            styles={sidebarStyles}
            right
            pageWrapId="page-wrap"
            outerContainerId="outer-container"
         >
            <Link onClick={() => setMenuOpen(false)} to={`${linksPrefix}/#home`}>
               {i18n === 'en' ? 'Home' : 'Início'}
            </Link>
            <Link onClick={() => setMenuOpen(false)} to={`${linksPrefix}/#projects`}>
               {i18n === 'en' ? 'Projects' : 'Projetos'}
            </Link>
            <Link onClick={() => setMenuOpen(false)} to={`${linksPrefix}/#findus`}>
               {i18n === 'en' ? 'Find us' : 'Nos encontre'}
            </Link>
            <Link onClick={() => setMenuOpen(false)} to={`${linksPrefix}/#about`}>
               {i18n === 'en' ? 'About' : 'Sobre'}
            </Link>
            <Link onClick={() => setMenuOpen(false)} to={`${linksPrefix}/#contact`}>
               {i18n === 'en' ? 'Contact' : 'Contato'}
            </Link>
         </Menu>
      </React.Fragment>
   )
}

const Logo = styled.img`
   margin-right: 1rem;
`;

const Nav = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   z-index: 2;
   background-color: rgba(242, 231, 229, 0.75);
   padding: 2rem 0;
   backdrop-filter: saturate(180%) blur(20px);
   .container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      ul {
         margin: 0;
         padding: 0;
         list-style: none;
         li {
            list-style: none;
            display: inline-block;
            a {
               display: inline-block;
               padding: 1rem 1rem;
            }
         }
      }
   }
`

const sidebarStyles = {
   bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '22px',
      right: '24px',
      top: '24px'
   },
   bmBurgerBars: {
      background: colors.OCEAN
   },
   bmBurgerBarsHover: {
      background: colors.OCEAN
   },
   bmCrossButton: {
      height: '24px',
      width: '24px'
   },
   bmCross: {
      background: colors.SAND
   },
   bmMenuWrap: {
      position: 'fixed',
      height: '100%'
   },
   bmMenu: {
      background: colors.SAND,
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
   },
   bmMorphShape: {
      fill: colors.SAND
   },
   bmItemList: {
      color: colors.OCEAN,
      padding: '0.8em'
   },
   bmItem: {
      display: 'block',
      padding: '0.5rem 0'
   },
   bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
   }
}

export default Navbar
