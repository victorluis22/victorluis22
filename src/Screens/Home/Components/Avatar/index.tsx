import React from 'react'
import { 
    Container, Image, Logo, LogoContainer, SubTitle, Title,
} from './style'

import myAvatar from '../../../../assets/images/myAvatar.png'

import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";

const Avatar: React.FC = () => {
  
  return (
    <Container>
      <Image src={myAvatar} alt="Imagem de Victor Luis Teixeira Reis" />
      <Title>Victor Luis Teixeira Reis</Title>
      <SubTitle>Estudante de Engenharia da Computação - IPRJ/UERJ</SubTitle>
      <LogoContainer>
        <Logo href='https://github.com/victorluis22' target={'_blank'}>
          <IoLogoGithub />
        </Logo>
        <Logo href='https://www.linkedin.com/in/victor-luis-teixeira-reis-877361243/' target={'_blank'}>
          <IoLogoLinkedin />
        </Logo>
        <Logo href='https://www.instagram.com/victor_luis22/' target={'_blank'}>
          <IoLogoInstagram />
        </Logo>
        <Logo href='https://mail.google.com/mail/?view=cm&fs=1&to=victorluis2002@gmail.com' target={'_blank'}>
          <IoMail />
        </Logo>
        <Logo href='https://wa.me/5522998779458' target={'_blank'}>
          <IoLogoWhatsapp />
        </Logo>
      </LogoContainer>
    </Container>
  )
}

export default Avatar
