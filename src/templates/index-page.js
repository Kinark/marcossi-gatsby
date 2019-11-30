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
   slogan: 'Porque o significado de design é projetar.',
   contactButton: 'Vamos conversar!',
   whatWeDo: {
      title: 'O que fazemos',
      subtitle: 'De fato, muitas coisas, mas todas com perfeição.',
      features: [
         {
            icon: compass,
            title: 'Sites',
            caption: 'Todos temos identidades, mas também precisamos ter uma personalidade virtual. Faça um site com a gente!'
         },
         {
            icon: mobile,
            title: 'Aplicativos',
            caption: 'Precisa de um aplicativo nativo para aparelhos móveis (celulares e tablets)? A gente faz também, relaxa!'
         },
         {
            icon: strategy,
            title: 'Sistemas',
            caption: 'Controle de estoques, um sistema personalizado, automações, com a tecnologia podemos alcançar qualquer patamar.'
         },
         {
            icon: paintbrush,
            title: 'Branding',
            caption: 'Logos, embalagens, identidades visuais, tudo o que você precisa para dar uma renovada na cara do seu projeto.'
         },
         {
            icon: camera,
            title: 'Fotografia',
            caption: 'Retratos, fotografias artísticas, fotos de produtos e qualquer coisa que precisar fotografar. Nossas lentes são mágicas!'
         }
      ]
   },
   transparent: {
      title: 'Sabemos o que estamos fazendo e seremos sempre transparentes.',
      caption1: 'Utilizaremos sempre as últimas tecnologias para construir exatamente aquilo que você está precisando, e não cobraremos mais do que o justo.',
      caption2: 'Por exemplo, você sabia que a maioria dos nossos clientes não pagam hospedagem por seus sites?'
   },
   love: {
      title: 'Isso tudo porque acreditamos em seres humanos como um todo.',
      caption1: 'Acreditamos que cada pessoa possui amor pelo que faz.',
      caption2:
         'Amamos fazer o que fazemos e prezamos sempre pela maior qualidade e menor preço possível, para tornar a tecnologia e o avanço disponível para o maior número de pessoas!'
   },
   portfolio: {
      title: 'Um pouco do nosso trabalho',
      caption: 'Alguns dos projetos nos quais tivemos a oportunidade de trabalhar.',
      learnMore: 'Saiba Mais',
      visitWebsite: 'Visite o site'
   },
   location: {
      title: 'E você pode nos encontrar quando você quiser, é só dar uma passada!',
      caption: 'Prefere bater um papo pessoalmente? Claro, estamos à disposição! Vem cá tomar um cafezinho com a gente!',
      addressLabel: 'Cá estamos',
      addressLine1: 'Brazil - CEP: 12947-200',
      addressLine2: 'Atibaia, Alameda Lorena - SP - Nº65'
   },
   about: {
      title: 'Sobre a gente',
      section1: {
         subtitle: 'Uma breve história, caso você não se importe.',
         caption1: 'Oi! Bom, chegou a hora de nos apresentarmos da maneira correta.',
         caption2:
            'Caso não se importe, gostaríamos de contar um pouquinho sobre nossas razões, motivos e filosofia. Sobre o que nos faz acordar todas as manhãs e sonhar todas as noites. Sobre altos e baixos, sobre nuvens e mares.',
         caption3: 'Ok, não vai ser tanta coisa assim, mas gostaríamos que emprestasse-nos um pouquinho do seu tempo :)'
      },
      section2: {
         subtitle: 'Amor pela tecnologia',
         caption1:
            'Desde pequenos fomos criados com computadores aos nossos arredores. Não só computadores, alguns de nós foi criado foi com tablets e smartphones também.',
         caption2: 'Fomos inseridos a este mundo quando nem ao menos imaginávamos o tanto de coisas que poderíamos fazer com elas.',
         caption3:
            'Isso, somado ao que aprendemos ao longo dos anos, nos deu uma verdadeira paixão por criar e manipular a tecnologia em prol de sonhos e seres humanos.'
      },
      section3: {
         subtitle: 'Indignação com o mercado atual.',
         caption1: 'Humanos são unidos através de semelhanças. É o que muitos chamam de empatia.',
         caption2: 'Sempre, desde quando trabalhávamos como freelancers, tentamos oferecer a melhor solução disponível, mas infelizmente isso não é comum.',
         caption3:
            'Ao longo de nossas jornadas nos deparamos com diversos vendedores de sites prontos, careiros e, em geral, pessoas que não são apaixonadas pelo que fazem. E esse é um dos motivos para estarmos aqui.'
      },
      section4: {
         subtitle: 'Acima de tudo, vontade de fazer do mundo um lugar melhor.',
         caption1:
            'Pode parecer uma frase clichê, mas o segundo ponto mais forte que nos une através da empatia é a vontade e o impulso de fazer do mundo um lugar melhor.',
         caption2:
            'Amor por desenvolver soluções, encontrar saídas para problemas, por deixar o mundo mais bonito e, acima de tudo, facilitar a vida de pessoas.'
      }
   },
   contact: {
      title: 'Contato',
      subtitle: 'Vamos bater aquele papinho, por que não?',
      subjects: [
         { icon: compass, title: 'Sites' },
         { icon: mobile, title: 'Aplicativos' },
         { icon: strategy, title: 'Sistemas' },
         { icon: paintbrush, title: 'Branding' },
         { icon: camera, title: 'Fotografia' },
         { icon: linegraph, title: 'Orçamento' },
         { icon: globe, title: 'Outros' }
      ],
      nameLabel: 'Nome',
      emailLabel: 'Email',
      messageLabel: 'Mensagem',
      sendLabel: 'Enviar'
   }
}

export default class IndexPageTemplate extends PureComponent {
   render() {
      const { projects } = this.props.data
      return (
         <Layout>
            <Introduction subtitle={data.slogan} btn={data.contactButton} />
            <WhatWeDo data={data.whatWeDo} />
            <Values data={{ transparent: data.transparent, love: data.love }} />
            <Projects data={data.portfolio} projects={projects.edges} />
            <FindUs data={data.location} />
            <About data={data.about} />
            <Contact data={data.contact} />
         </Layout>
      )
   }
}

export const pageQuery = graphql`
   query IndexQueryDefault {
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
                  title
                  excerpt
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
