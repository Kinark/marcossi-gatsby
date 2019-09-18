import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { Button, ButtonLink } from './Button'

export default class ChangeLocaleBtns extends PureComponent {
   state = {
      open: false
   }

   openOptions = () => this.setState({ open: true })

   closeOptions = () => this.setState({ open: false })

   render() {
      const { i18n } = this.props
      const { open } = this.state
      const pathname = typeof window !== `undefined` ? window.location.pathname : 'Z'
      const anotherLanguageLink = i18n === 'en' ? pathname.substring(3) : `/en/${pathname}`
      return (
         <Wrapper onClick={this.openOptions} onMouseLeave={this.closeOptions}>
            <HiddenPill onClick={this.closeOptions} to={anotherLanguageLink} className={open ? 'active' : ''}>
               {i18n === 'en' ? 'Português' : 'English'}
            </HiddenPill>
            <ActivePill>{i18n === 'en' ? 'English' : 'Português'}</ActivePill>
         </Wrapper>
      )
   }
}

const Wrapper = styled.div`
   position: fixed;
   bottom: 1rem;
   right: 1rem;
   z-index: 1;
   padding-top: 1rem;
`

const ActivePill = styled(Button)`
   margin: 0;
   width: 9rem;
`

const HiddenPill = styled(ButtonLink)`
   margin: 0;
   position: absolute;
   transition: all 300ms ease-out;
   opacity: 0;
   bottom: 0;
   right: 0;
   width: 9rem;
   z-index: -1;
   &.active {
      bottom: 50px;
      opacity: 1;
   }
`
