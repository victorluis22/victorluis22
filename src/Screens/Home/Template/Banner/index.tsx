import React from 'react'
import { 
    Container,
} from './style'

import Avatar from '../../Components/Avatar'
import Header from '../../Components/Header'
import MobileHeader from '../../Components/MobileHeader'

const Banner: React.FC = () => {

  return (
    <Container id='banner'>
      <MobileHeader />
      <Header />
      <Avatar />
    </Container>
  )
}

export default Banner
