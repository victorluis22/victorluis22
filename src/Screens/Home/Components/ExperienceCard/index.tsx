import React from 'react'
import { 
    Container,
    Content,
    Date,
    Image,
    SubTitle,
    Text,
    TextContainer,
    TimeLine,
    TimeLineText,
    Title
} from './style'

interface ExperienceCardProps{
  image: string,
  role: string,
  institution: string,
  start: string,
  finish: string,
  description: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({image, role, institution, start, finish, description}) => {

  return (
    <Container>
      <TimeLine>
        <TimeLineText>{start}</TimeLineText>
        <TimeLineText>{finish}</TimeLineText>
      </TimeLine>
      <Content
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Image src={image} alt={role}/>
        <TextContainer>
          <Title>{role}</Title>
          <SubTitle>{institution}</SubTitle>
          <Date>{start} - {finish}</Date>
          <Text>{description}</Text>
        </TextContainer>
        
      </Content>
    </Container>
  )
}

export default ExperienceCard
