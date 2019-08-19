export default class IndexPageTemplate extends PureComponent {
    render() {
       return (
       <Layout>
          <Introduction />
          <WhatWeDo />
          <Values />
          <Projects />
          <FindUs />
          <Testimonials />
          <About />
          <Contact />
       </Layout>
       )
    }
 }