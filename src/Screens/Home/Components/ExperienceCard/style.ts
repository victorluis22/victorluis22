import styled from "styled-components";
import { width } from "../../../../Config";


export const Container = styled.div`
   display: flex;
   align-items: flex-start;
   /* justify-content: center; */
   margin: 20px;
   width: 700px;

   @media screen and (max-width: ${width.notebook}px) {    
      width: 70%;
   }
   @media screen and (max-width: ${width.mobile}px) {    
      flex-direction: column;
      align-items: center;
   }
`;

export const Image = styled.img`
   width: 80px;
   margin: 20px;
`;

export const TextContainer = styled.div`
  
`;

export const Title = styled.h2`
   font-size: var(--medium);
   @media screen and (max-width: ${width.tablet}px) {    
      font-size: var(--small);
   }
`;

export const SubTitle = styled.h3`
   font-size: var(--medium);
   @media screen and (max-width: ${width.tablet}px) {    
      font-size: var(--small);
   }
`;

export const Text = styled.p`
   font-size: var(--small);
`;

