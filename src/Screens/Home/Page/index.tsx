import React, { useRef } from 'react'
import { 
    Container
} from './style'

import Banner from '../Template/Banner'
import About from '../Template/About'
import Experience from '../Template/Experience'
import Portifolio from '../Template/Portifolio'


const Home: React.FC = () => {

  return (
    <Container>
      <Banner />
      <About />
      <Experience />
      <Portifolio />
    </Container>
  )
}

export default Home
