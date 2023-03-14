import React from 'react'
import { 
    Container,
    Title,
    Text
} from './style'

const About: React.FC = () => {

  return (
    <Container id='about'>
      <Title>Sobre mim</Title>
      <Text>Sou estudante de Engenharia da Computação na Universidade do Estado do Rio de Janeiro, também fazendo parte da empresa Serra Jr. Engenharia como Assessor de Computação. Amo tecnologia e principalmente desenvolvimento de softwares e aplicações web. Busco vivenciar cada vez mais a área da tecnologia da informação e adoro conhecer coisas sobre esse assunto.</Text>
    </Container>
  )
}

export default About
