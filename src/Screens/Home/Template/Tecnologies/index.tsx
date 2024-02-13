import React from 'react'
import { 
    Container,
    Icons,
    Title,
    IconsContainer
} from './style'

import { tecnologiesData } from '../../../../Services/tecnologiesData'

const Tecnologies: React.FC = () => {

  return (
    <Container id='tecnologies'>
      <Title>Minha Stack</Title>
      <IconsContainer>
        {tecnologiesData.icons.map((eachIcons) => {
          return <Icons src={eachIcons.src} alt={eachIcons.alt} />
        })}
      </IconsContainer>
    </Container>
  )
}

export default Tecnologies
