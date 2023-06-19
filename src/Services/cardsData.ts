import cervejelasiPhone from '../assets/images/cervejelasiPhone.png'
import cervejelasMac from '../assets/images/cervejelasMac.png'
import serraiPhone from '../assets/images/serraiPhone.png'
import serraMac from '../assets/images/serraMac.png'
import odsiPhone from '../assets/images/odsiPhone.png'
import odsMac from '../assets/images/odsMac.png'
import etarserraiPhone from '../assets/images/etarserraiPhone.png'
import etarserraMac from '../assets/images/etarserraMac.png'


export const cardsData = [
    {
        projectName: 'Cervejelas 2023',
        macImage: cervejelasMac,
        iPhoneImage: cervejelasiPhone,
        description: "Projeto da Serra Jr. Engenharia realizado para o evento Cervejelas 2023, que ocorreu em Teresópolis nos dias 21 e 22 de Janeiro de 2023. Eu e meus colegas desenvolvemos uma landing page informativa com design bem moderno usando React, JavaScript e Styled Components.",
        tecIcons:[
          'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
          'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white',
          'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'
        ],
        tecIconsAlt:[
          'React', 
          'Styled Components', 
          'JavaScript'
        ],
        url:"https://cervejelas.com.br/",
        radialBackground: `background: radial-gradient(50% 50% at 50% 50%, #CD00FF 0%, #9400B9 20%, #6B0086 40%, #370044 60%, #15001A 80%, #000000 100%);
        box-shadow: 5px 10px 10px 9px rgba(0, 0, 0, 0.25);`
    },
    {
        projectName: 'Site Serra Jr. Engenharia',
        macImage: serraMac,
        iPhoneImage: serraiPhone,
        description: "Site institucional da Serra Júnior Engenharia. Realizado usando React, Typescript e Styled Components. Contêm várias páginas com informações sobre carta de serviços, história e contato da empresa.",
        tecIcons:[
          'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
          'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white',
          'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'
        ],
        tecIconsAlt:[
          'React', 
          'Styled Components', 
          'TypeScript'
        ],
        url:"https://www.serrajr.eng.br/",
        radialBackground: `background: radial-gradient(50% 50% at 50% 50%, #0151A2 0%, #003161 33.33%, #001123 66.67%, #000000 100%);
        box-shadow: 5px 10px 10px 9px rgba(0, 0, 0, 0.25);`
    },
    {
      projectName: 'ODS Quiz',
      macImage: odsMac,
      iPhoneImage: odsiPhone,
      description: "Projeto realizado no Hackaton Hack 2030 organizado pela UERJ no Rio de Janeiro.  É um sistema de medição dos Objetivos de Desenvolvimento Social da ONU em comunidades. Foi feito usando React, JavaScript, Axios, Express e MongoDB.",
      tecIcons:[
        'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
        'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
        'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
        'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'
      ],
      tecIconsAlt:[
        'React', 
        'JavaScript', 
        'Express',
        'MongoDB'
      ],
      url:"https://odsquiz.netlify.app/",
      radialBackground: `background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #8E8E8E 25%, #2D2D2D 60.42%, #191919 69.79%, #000000 100%);
      box-shadow: 5px 10px 10px 9px rgba(0, 0, 0, 0.25);`
  },
  {
    projectName: 'Etarserra 2022',
    macImage: etarserraMac,
    iPhoneImage: etarserraiPhone,
    description: "Projeto realizado para o evento Etarserra 2022, que ocorreu de 18 a 21 de outubro em Nova Friburgo. Site simples realizado em WordPress e contando com vários plugins de acessibilidade.",
    tecIcons:[
      'https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white',
    ],
    tecIconsAlt:[
      'WordPress'
    ],
    url:"https://etarserra.com/x/",
    radialBackground: `background: radial-gradient(50% 50% at 50% 50%, #FFDF5D 0%, #B8A143 33.33%, #363014 66.67%, #181509 78.65%, #000000 100%);
    box-shadow: 5px 10px 10px 9px rgba(0, 0, 0, 0.25);`
}
]
