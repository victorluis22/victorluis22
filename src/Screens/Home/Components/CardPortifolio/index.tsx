import React from 'react'
import { 
    Container,
    ImagesContainer,
    LowerContainer,
    IconsContainer,
    Text,
    Icons,
    Link,
    Card,
    ImagePhone,
    ImageMac
} from './style'

interface PortifolioProps{
  projectName: string,
  macImage: string,
  iPhoneImage: string,
  description: string,
  tecIcons: Array<string>,
  tecIconsAlt: Array<string>,
  url: string,
  radialBackground: string
}

const CardPortifolio: React.FC<PortifolioProps> = ({projectName, macImage, iPhoneImage, description, tecIcons, tecIconsAlt, url, radialBackground}) => {
  
  return (
    <Container backgroundStyle={radialBackground}>
      <Card>
        <ImagesContainer>
          <ImageMac src={macImage} alt={`Imagem do projeto ${projectName} em um Mac`} />
          <ImagePhone src={iPhoneImage} alt={`Imagem do projeto ${projectName} em um iPhone`}/>
        </ImagesContainer>

        <Text>{description}</Text>

        <LowerContainer>
          <IconsContainer>
            {tecIcons.map((eachIcon, index) => {
              return(
                <Icons key={index} src={eachIcon} alt={`Icone da tecnologia ${tecIconsAlt[index]}`}/>
              )
            })}
          </IconsContainer>
          <Link href={url} target="_blank">{`${projectName} >`}</Link>
        </LowerContainer>
      </Card>
    </Container>
  )
}

export default CardPortifolio
