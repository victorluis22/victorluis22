import React from 'react'
import { 
    Container,
    Title,
} from './style'

import CardPortifolio from '../../Components/CardPortifolio'
import { cardsData } from '../../../../Services/cardsData'

import Carousel  from 'react-bootstrap/Carousel'

const Portifolio: React.FC = () => {

  return (
    <Container id='portifolio'>
      <Title>Portifólio</Title>
      
      <Carousel>
        {
            cardsData.map((card, index) =>{
              return(
                <Carousel.Item>
                    <CardPortifolio
                    key={index}
                    projectName={card.projectName}
                    macImage={card.macImage}
                    iPhoneImage={card.iPhoneImage}
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
