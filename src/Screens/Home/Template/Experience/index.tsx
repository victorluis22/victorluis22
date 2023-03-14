import React from 'react'
import { 
    Container,
    Title,
} from './style'

import { experienceData } from '../../../../Services/experienceData'
import ExperienceCard from '../../Components/ExperienceCard'

const Experience: React.FC = () => {

  return (
    <Container id='experience'>
      <Title>Experiência</Title>
      
      {experienceData.map((eachExperience, index) => {
        return <ExperienceCard key={index} image={eachExperience.image} title={eachExperience.title} subTitle={eachExperience.subTitle} text={eachExperience.text}/>
      })}

      
    </Container>
  )
}

export default Experience 
