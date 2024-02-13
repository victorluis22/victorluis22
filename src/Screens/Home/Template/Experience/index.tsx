import React from 'react'
import { 
  CardContainer,
    Container,
    Title,
} from './style'

import { experienceData } from '../../../../Services/experienceData'
import ExperienceCard from '../../Components/ExperienceCard'

const Experience: React.FC = () => {

  return (
    <Container id='experience'>
      <Title>Experiência Profissional</Title>
      <CardContainer>
        {experienceData.map((eachExperience) => {
          return <ExperienceCard 
          key={eachExperience.id} 
          image={eachExperience.image} 
          role={eachExperience.role}
          institution={eachExperience.institution}
          start={eachExperience.start}
          finish={eachExperience.finish}
          description={eachExperience.description}
        />
        })}
      </CardContainer>

      
    </Container>
  )
}

export default Experience 
