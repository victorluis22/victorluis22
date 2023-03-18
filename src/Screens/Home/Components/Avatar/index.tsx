import React from 'react'
import { 
    Container, Image, SubTitle, Title,
} from './style'

import myAvatar from '../../../../assets/images/myAvatar.png'
import ContactBadges from '../ContactBadges'

const Avatar: React.FC = () => {
  
  return (
    <Container>
      <Image src={myAvatar} alt="Imagem de Victor Luis Teixeira Reis" />
      <Title>Victor Luis Teixeira Reis</Title>
      <SubTitle>Estudante de Engenharia da Computação - IPRJ/UERJ</SubTitle>
      <ContactBadges />
    </Container>
  )
}

export default Avatar
