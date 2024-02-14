import React from 'react'
import { 
    Container,
    Title,
} from './style'

import CardPortifolio from '../../Components/CardPortifolio'
import { portfolioData } from '../../../../Services/portfolioData'

import Carousel  from 'react-bootstrap/Carousel'

const Portifolio: React.FC = () => {

  return (
    <Container id='portifolio'>
      <Title>Portifólio</Title>
      
      <Carousel>
        {
            portfolioData.map((card) =>{
              return(
                <Carousel.Item key={card.id}>
                    <CardPortifolio
                    projectName={card.projectName}
                    image1={card.image1}
                    image2={card.image2}
                    description={card.description}
                    tecIcons={card.tecIcons}
                    tecIconsAlt={card.tecIconsAlt}
                    url={card.url}
                    radialBackground={card.radialBackground}
                  />
                </Carousel.Item>
              )
            })
          }
      </Carousel>
    </Container>
  )
}

export default Portifolio 
