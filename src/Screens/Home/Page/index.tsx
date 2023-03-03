import React from 'react'
import { 
    Container
} from './style'

import Banner from '../Template/Banner'
import About from '../Template/About'
import Portifolio from '../Template/Portifolio'


const Home: React.FC = () => {

  return (
    <Container>
      <Banner />
      <About />
      <Portifolio />
    </Container>
  )
}

export default Home
