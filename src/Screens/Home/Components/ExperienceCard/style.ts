import styled from "styled-components";
import { width } from "../../../../Config";

import { motion } from "framer-motion"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const TimeLine = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 80%;
   border-right: 2px solid var(--light-black);
   width: 100px;

   @media screen and (max-width: ${width.largeMobile}px) {    
      display: none;
   }
`;

export const TimeLineText = styled.span`
   font-size: var(--small);
   width: 100%;
   text-align: left;
   font-weight: light;
`;

export const Content = styled(motion.div)`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   border-radius: 5px;
   padding: 20px;
   flex-wrap: wrap;
   width: calc(100% - 100px);
   
   @media screen and (max-width: ${width.largeMobile}px) {    
      width: 100%;
   }
`;

export const Image = styled.img`
   width: 80px;
   margin: 20px;
`;

export const TextContainer = styled.div`
   flex-basis: 700px;
`;

export const Title = styled.h2`
   font-size: var(--medium);
   font-weight: bold;
   @media screen and (max-width: ${width.tablet}px) {    
      font-size: var(--small);
   }
`;

export const SubTitle = styled.h3`
   font-size: var(--medium);
   font-weight: bold;
   @media screen and (max-width: ${width.tablet}px) {    
      font-size: var(--small);
   }
`;

export const Date = styled.h4`
   font-size: var(--small);
   display: none;
   @media screen and (max-width: ${width.largeMobile}px) {    
      display: block;
   }
`;

export const Text = styled.p`
   font-size: var(--small);
`;

