import React from 'react'
import { 
    Container
} from './style'

import Banner from '../Template/Banner'
import About from '../Template/About'
import Experience from '../Template/Experience'
import Portifolio from '../Template/Portifolio'
import Footer from '../Template/Footer'


const Home: React.FC = () => {

  return (
    <Container>
      <Banner />
      <About />
      <Experience />
      <Portifolio />
      <Footer />
    </Container>
  )
}

export default Home
