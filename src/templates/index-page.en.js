import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'

import compass from '../img/illustrations/compass.svg'
import mobile from '../img/illustrations/mobile.svg'
import strategy from '../img/illustrations/strategy.svg'
import paintbrush from '../img/illustrations/paintbrush.svg'
import camera from '../img/illustrations/camera.svg'
import linegraph from '../img/illustrations/linegraph.svg'
import globe from '../img/illustrations/globe.svg'

import Layout from '../components/Layout'
import Introduction from '../components/indexComponents/Introduction'
import WhatWeDo from '../components/indexComponents/WhatWeDo'
import Values from '../components/indexComponents/Values'
import Projects from '../components/indexComponents/Projects'
import FindUs from '../components/indexComponents/FindUs'
// import Testimonials from '../components/indexComponents/Testimonials'
import About from '../components/indexComponents/About'
import Contact from '../components/indexComponents/Contact'

const data = {
   slogan: 'The true meaning of design.',
   contactButton: 'Let\'s talk!',
   whatWeDo: {
      title: 'O que fazemos',
      subtitle: 'De fato, muitas coisas, mas todas com perfeição.',
      features: [
         {
            icon: compass,
            title: 'Sites',
            caption: 'We all have identities, but we also need virtual personas. We can do it!'
         },
         {
            icon: mobile,
            title: 'Apps',
            caption: 'Need a native app for mobile devices (tablets and smartphones)? We can do it too, don\'t worry!'
         },
         {
            icon: strategy,
            title: 'Systems',
            caption: 'A stock management, a custom system, with tech we can reach everything.'
         },
         {
            icon: paintbrush,
            title: 'Branding',
            caption: 'Logos, packages, visual identities, everything you need to give your project a fresh new look.'
         },
         {
            icon: camera,
            title: 'Photos',
            caption: 'Portraits, artistic photos, product pictures and anything else you need to take a shoot of. Our lens are like magic!'
         }
      ]
   },
   transparent: {
      title: 'We know what we\'re doing and we\'ll be always transparent.',
      caption1: 'We\'ll always choose the latest technologies to build exactly what you\'re looking for, and we\'ll never charge more than what\'s fair.',
      caption2: 'For example, did you know that the majority of our clients doesn\'t pay for it\'s website hosting?'
   },
   love: {
      title: 'That\'s because we believe in human beings as they are.',
      caption1: 'We believe that everyone does what they do for love.',
      caption2:
         'We love to do what we do and we\'re proud to deliver the best quality for the lowest price possible, all to make the technology and the advance available for many people as possible.'
   },
   portfolio: {
      title: 'A little of our job',
      caption: 'Some of the projects we had the oppotunity to work on.',
      learnMore: 'Learn more',
      visitWebsite: 'Go to site'
   },
   location: {
      title: 'And you can always find us whenever you want, just stop by!',
      caption: 'Do you prefer to talk personally? Of course, we\'re here! Come take coffee with us!',
      addressLabel: 'Here we are',
      addressLine1: 'Brazil - CEP: 12947-200',
      addressLine2: 'Atibaia, Alameda Lorena - SP - Nº65'
   },
   about: {
      title: 'About us',
      section1: {
         subtitle: 'A brief story, if you\'re not in a rush',
         caption1: 'Hey! Well, the time has come for us to present to ourselves in the correct way.',
         caption2:
            'If you\'re not in a rush, we\'d like to tell you a little about our reasons, wills and philosophy. About what makes us wake up everyday and dream every night. About highs and lows, about clouds and seas.',
         caption3: 'Ok, it won\'t be that much, but we\'d love if you borrow us a little of your time :)'
      },
      section2: {
         subtitle: 'Love for technology.',
         caption1:
            'From an early age we were raised with computers around us. Not only computers, some of us was created was with tablets and smartphones as well.',
         caption2: 'We were introduced to this world when we didn\'t even imagine how much we could do with them.',
         caption3:
            'This, in addition to what we\'ve learned over the years, has given us a real passion for creating and manipulating technology for the sake of dreams and humans.'
      },
      section3: {
         subtitle: 'Indignation with the current market.',
         caption1: 'Humans are united through similarities. This is what many call empathy.',
         caption2: 'Ever since we worked as freelancers, we have tried to offer the best solution available, but unfortunately this is not a constant.',
         caption3:
            'Throughout our journeys, we come across several of ready-made website sellers, people who charges high prices and, in general, people who are not in love with what they do. And that is one of the reasons we are here.'
      },
      section4: {
         subtitle: 'Above all, a drive to make the world a better place.',
         caption1:
            'It may sound like a cliché, but the second strongest thing that unites us through empathy is the willingness and the drive to make the world a better place.',
         caption2:
            'AThe love of developing solutions, for finding ways out of problems, for making the world more beautiful and, above all, for facilitating people\'s lives.'
      }
   },
   contact: {
      title: 'Contato',
      subtitle: 'Let\'s chat, why not?',
      subjects: [
         { icon: compass, title: 'Sites' },
         { icon: mobile, title: 'Apps' },
         { icon: strategy, title: 'Systems' },
         { icon: paintbrush, title: 'Branding' },
         { icon: camera, title: 'Photography' },
         { icon: linegraph, title: 'Budget' },
         { icon: globe, title: 'Another thing' }
      ],
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendLabel: 'Send'
   }
}

export default class IndexPageTemplate extends PureComponent {
   render() {
      const { projects } = this.props.data
      return (
         <Layout i18n="en">
            <Introduction subtitle={data.slogan} btn={data.contactButton} />
            <WhatWeDo data={data.whatWeDo} />
            <Values data={{ transparent: data.transparent, love: data.love }} />
            <Projects data={data.portfolio} projects={projects.edges} />
            <FindUs data={data.location} />
            <About data={data.about} />
            <Contact i18n="en" data={data.contact} />
         </Layout>
      )
   }
}

export const pageQuery = graphql`
   query IndexEnQueryDefault {
      projects: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "project-page" } } }) {
         edges {
            node {
               frontmatter {
                  featuredimage {
                     childImageSharp {
                        fluid(maxWidth: 1080, quality: 75) {
                           ...GatsbyImageSharpFluid
                        }
                     }
                     publicURL
                  }
                  title: titleEn
                  excerpt: excerptEn
                  externalLink
               }
               fields {
                  slug
               }
            }
         }
      }
   }
`
