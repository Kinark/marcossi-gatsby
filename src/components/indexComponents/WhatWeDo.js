import React from 'react'

import Card from '../Card'
import Title from '../Title'
import SmallTitle from '../SmallTitle'
import ResponsiveImg from '../ResponsiveImg'

const WhatWeDo = props => {
   const { data } = props
   return (
      <section className="section">
         <div className="container center">
            <Card>
               <Title className="section padded">{data.title}</Title>
               <div className="row xs-center section padded no-pad-top">
                  <div className="col xs12 l4 xl3">
                     <ResponsiveImg inline maxWidth="158" src={data.feature1.image.publicURL} style={{ margin: '33px auto' }} alt="" />
                     <SmallTitle>{data.feature1.title}</SmallTitle>
                     <p className="no-mrg">{data.feature1.description}</p>
                  </div>
                  <div className="col xs12 l4 xl3">
                     <ResponsiveImg inline maxWidth="158" src={data.feature2.image.publicURL} alt="" />
                     <SmallTitle>{data.feature2.title}</SmallTitle>
                     <p className="no-mrg">{data.feature2.description}</p>
                  </div>
                  <div className="col xs12 l4 xl3">
                     <ResponsiveImg inline maxWidth="158" src={data.feature3.image.publicURL} alt="" />
                     <SmallTitle>{data.feature3.title}</SmallTitle>
                     <p className="no-mrg">{data.feature3.description}</p>
                  </div>
               </div>
            </Card>
         </div>
      </section>
   )
}

export default WhatWeDo
