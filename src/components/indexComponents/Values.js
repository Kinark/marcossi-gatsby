import React from 'react'

import Subtitle from '../Subtitle'
import ResponsiveImg from '../ResponsiveImg'
import MDP from '../MDP'

const Values = props => {
   const { data } = props
   return (
      <section className="section padded">
         <div className="container ">
            <div className="row xs-middle section padded no-pad-top">
               <div className="col xs12 l6 left-align center-on-med-and-down">
                  <ResponsiveImg inline maxWidth="510" src={data.value1.image.publicURL} alt="" />
               </div>
               <div className="col xs12 l6">
                  <Subtitle dangerouslySetInnerHTML={{ __html: data.value1.title }} />
                  <MDP className="no-mrg">{data.value1.description}</MDP>
               </div>
            </div>

            <div className="row xs-middle section padded no-pad-top">
               <div className="col xs12 l6">
                  <Subtitle dangerouslySetInnerHTML={{ __html: data.value2.title }} />
                  <MDP className="no-mrg">{data.value2.description}</MDP>
               </div>
               <div className="col xs12 xs-first l-last l6 right-align center-on-med-and-down">
                  <ResponsiveImg inline maxWidth="425" src={data.value2.image.publicURL} alt="" />
               </div>
            </div>

            <div className="row xs-center section padded no-pad-top">
               <div className="col xs12 l6 center">
                  <ResponsiveImg inline maxWidth="375" src={data.value3.image.publicURL} alt="" />
                  <Subtitle dangerouslySetInnerHTML={{ __html: data.value3.title }} />
                  <MDP className="no-mrg">{data.value3.description}</MDP>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Values
