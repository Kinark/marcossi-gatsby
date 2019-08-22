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
      const anotherLanguageLink = i18n === 'en' ? window.location.pathname.substring(3) : `/en/${window.location.pathname}`
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
   bottom: 0px;
   right: 1rem;
   z-index: 1;
`

const ActivePill = styled(Button)`
   width: 9rem;
`

const HiddenPill = styled(ButtonLink)`
   width: 9rem;
   position: absolute;
   transition: all 300ms ease-out;
   opacity: 0;
   bottom: 0;
   right: 0;
   width: 100%;
   z-index: -1;
   &.active {
      bottom: 50px;
      opacity: 1;
   }
`
