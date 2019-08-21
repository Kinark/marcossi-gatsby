import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import Swal from 'sweetalert2'

import colors from '../../constants/colors'
import useInput from '../../utils/useInput'
import urlEncodeObject from '../../utils/urlEncodeObject'

import Subtitle from '../Subtitle'
import ResponsiveImg from '../ResponsiveImg'
import { Button } from '../Button'
import { Input, Textarea } from '../Inputs'

const About = () => {
   const { value: valueName, bind: bindName, reset: resetName } = useInput('')
   const { value: valueEmail, bind: bindEmail, reset: resetEmail } = useInput('')
   const { value: valueMessage, bind: bindMessage, reset: resetMessage } = useInput('')
   const [loading, setLoading] = useState(false)

   const { markdownRemark } = useStaticQuery(graphql`
      query ContactQuery {
         markdownRemark {
            frontmatter {
               contact {
                  image {
                     publicURL
                  }
                  title
                  nameLabel
                  emailLabel
                  messageLabel
               }
            }
         }
      }
   `)

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
               title: 'Sucesso!',
               text: 'Vamos entrar encontato!',
               type: 'success',
               confirmButtonText: 'Legal!'
            })
         })
         .catch(error => {
            setLoading(false)
            Swal.fire({
               title: 'Ops!',
               text: 'Algo deu errado. Você está conectado a internet?',
               type: 'error',
               confirmButtonText: 'Que pena :('
            })
         })

      // resetName()
      // resetEmail()
      // resetMessage()
   }

   const { frontmatter } = markdownRemark
   const { contact } = frontmatter
   return (
      <section className="section padded">
         <div className="container">
            <div className="section">
               <div className="row xs-center section padded no-pad-top">
                  <div className="col xs12 l6 center">
                     <ResponsiveImg inline maxWidth="545" src={contact.image.publicURL} alt="" />
                     <Subtitle dangerouslySetInnerHTML={{ __html: contact.title }} />
                     <FormWrapper loading={loading ? 1 : 0}>
                        <form onSubmit={handleSubmit} action="/" className="section">
                           <input type="hidden" name="form-name" value="contact" />
                           <Input type="text" placeholder={contact.nameLabel} required {...bindName} />
                           <Input type="email" placeholder={contact.emailLabel} required {...bindEmail} />
                           <Textarea placeholder={contact.messageLabel} required {...bindMessage} />
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
