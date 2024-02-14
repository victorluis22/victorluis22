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
  image1: string,
  image2: string,
  description: string,
  tecIcons: Array<string>,
  tecIconsAlt: Array<string>,
  url: string,
  radialBackground: string
}

const CardPortifolio: React.FC<PortifolioProps> = ({projectName, image1, image2, description, tecIcons, tecIconsAlt, url, radialBackground}) => {
  
  return (
    <Container backgroundStyle={radialBackground}>
      <Card>
        <ImagesContainer>
          {
            image1 ?
            <ImageMac src={image1} alt={`Imagem do projeto ${projectName} em um Mac`} />
            : 
            null
          }
          {
            image2 ?
            <ImagePhone src={image2} alt={`Imagem do projeto ${projectName} em um iPhone`}/>
            : 
            null
          }
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
          {
            url ?
            <Link href={url} target="_blank">{`${projectName} >`}</Link>
            :
            null
          }
        </LowerContainer>
      </Card>
    </Container>
  )
}

export default CardPortifolio
