import React, { PureComponent } from 'react'

import Layout from '../components/Layout'
import Introduction from '../components/indexComponents/Introduction'
import WhatWeDo from '../components/indexComponents/WhatWeDo'
import Values from '../components/indexComponents/Values'
import Projects from '../components/indexComponents/Projects'
// import FindUs from '../components/indexComponents/FindUs'
// import Testimonials from '../components/indexComponents/Testimonials'
// import About from '../components/indexComponents/About'
// import Contact from '../components/indexComponents/Contact'

export default class IndexPageTemplate extends PureComponent {
   render() {
      return (
      <Layout>
         <Introduction />
         <WhatWeDo />
         <Values />
         <Projects />
         {/* <FindUs /> */}
         {/* <Testimonials /> */}
         {/* <About /> */}
         {/* <Contact /> */}
      </Layout>
      )
   }
}

