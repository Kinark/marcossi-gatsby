import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Swal from 'sweetalert2'

import colors from '../../constants/colors'
import useInput from '../../utils/useInput'
import urlEncodeObject from '../../utils/urlEncodeObject'

import Subtitle from '../Subtitle'
import ResponsiveImg from '../ResponsiveImg'
import { Button } from '../Button'
import { Input, Textarea } from '../Inputs'

const About = ({ data, i18n }) => {
   const { value: valueName, bind: bindName, reset: resetName } = useInput('')
   const { value: valueEmail, bind: bindEmail, reset: resetEmail } = useInput('')
   const { value: valueMessage, bind: bindMessage, reset: resetMessage } = useInput('')
   const [loading, setLoading] = useState(false)

   const handleSubmit = e => {
      e.preventDefault()
      setLoading(true)
      fetch('/', {
         method: 'POST',
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
         body: urlEncodeObject({ 'form-name': 'contact', name: valueName, email: valueEmail, message: valueMessage })
      })
         .then(() => {
            setLoading(false)
            Swal.fire({
               title: i18n === 'en' ? 'Success' : 'Sucesso!',
               text: i18n === 'en' ? "We'll make contact!" : 'Vamos entrar em contato!',
               type: 'success',
               confirmButtonText: i18n === 'en' ? 'Cool!' : 'Legal!'
            })
            resetName()
            resetEmail()
            resetMessage()
         })
         .catch(error => {
            setLoading(false)
            Swal.fire({
               title: i18n === 'en' ? 'Oops!' : 'Ops!',
               text: i18n === 'en' ? 'Something went wrong. Are you connected to internet?' : 'Algo deu errado. Você está conectado a internet?',
               type: 'error',
               confirmButtonText: i18n === 'en' ? 'What a shame :(' : 'Que pena :('
            })
         })
   }

   return (
      <section className="section padded" id="contact">
         <div className="container">
            <div className="section">
               <div className="row xs-center section padded no-pad-top">
                  <div className="col xs12 l6 center">
                     <ResponsiveImg inline maxWidth="545" src={data.image.publicURL} alt="" />
                     <Subtitle dangerouslySetInnerHTML={{ __html: data.title }} />
                     <FormWrapper loading={loading ? 1 : 0}>
                        <form onSubmit={handleSubmit} action="/" className="section">
                           <input type="hidden" name="form-name" value="contact" />
                           <Input type="text" placeholder={data.nameLabel} required {...bindName} />
                           <Input type="email" placeholder={data.emailLabel} required {...bindEmail} />
                           <Textarea placeholder={data.messageLabel} required {...bindMessage} />
                           <div className="right-align">
                              <Button type="submit">Enviar</Button>
                           </div>
                        </form>
                     </FormWrapper>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

const FormWrapper = styled.div`
   position: relative;
   ${({ loading }) =>
      loading
         ? css`
              pointer-events: none;
              &::after {
                 position: absolute;
                 width: 100%;
                 height: 100%;
                 top: 0;
                 left: 0;
                 content: '...';
                 font-size: 10rem;
                 color: ${colors.TITLE};
                 background-color: rgba(251, 252, 255, 0.75);
              }
           `
         : ''}
`

export default About
