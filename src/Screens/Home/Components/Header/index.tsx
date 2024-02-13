import React from 'react'
import { 
    Container, Text
} from './style'

const Header: React.FC = () => {

  return (
    <Container>
      <Text href='#about'>Sobre</Text>
      <Text href='#tecnologies'>Stack</Text>
      <Text href='#experience'>Experiência</Text>
      <Text href='#portifolio'>Portifólio</Text>
      {/* <Text href='#banner'>Contato</Text> */}
    </Container>
  )
}

export default Header
