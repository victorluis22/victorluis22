import React from 'react'
import { 
    Container,
    Title,
    Text
} from './style'
import { aboutData } from '../../../../Services/aboutData'

const About: React.FC = () => {

  return (
    <Container id='about'>
      <Title>Sobre mim</Title>
      <Text>{aboutData.description}</Text>
    </Container>
  )
}

export default About
