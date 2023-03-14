import React from 'react'
import { 
    Container,
    Image,
    SubTitle,
    Text,
    TextContainer,
    Title
} from './style'

interface ExperienceCardProps{
  image: string,
  title: string,
  subTitle: string,
  text: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({image, title, subTitle, text}) => {
  
  return (
    <Container>
      <Image src={image} alt={text}/>
      <TextContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Text>{text}</Text>
      </TextContainer>
      
    </Container>
  )
}

export default ExperienceCard
