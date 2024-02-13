import React, { useState } from 'react'
import { 
    Container, Logo, Menu, Text
} from './style'

import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const MobileHeader: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <Container>
      <Logo onClick={() => setIsVisible(!isVisible)}>
        {isVisible ?
          <IoCloseOutline size={40} />
          :
          <IoMenuOutline size={40}/>
        }
      </Logo>

      <Menu statusVisible={isVisible}>
        <Text href='#about' onClick={() => setIsVisible(false)}>Sobre</Text>
        <Text href='#experience' onClick={() => setIsVisible(false)}>Experiência</Text>
        <Text href='#tecnologies' onClick={() => setIsVisible(false)}>Stack</Text>
        <Text href='#portifolio' onClick={() => setIsVisible(false)}>Portifólio</Text>
        {/* <Text href='#banner'>Contato</Text> */}
      </Menu>
    </Container>
  )
}

export default MobileHeader
