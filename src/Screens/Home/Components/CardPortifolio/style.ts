import styled from "styled-components";
import { width } from "../../../../Config";

interface ContainerProps{
    backgroundStyle: string
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({backgroundStyle}) => {
        return(backgroundStyle)
    }}
`;

export const Card = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 30px;
`;

export const ImagesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 30px;
    width: 80%;
`;

export const Image = styled.img`
    width: 250px;
    height: 250px;
    @media screen and (max-width: ${width.tablet}px) {    
        width: 120px;
        height: 120px;
    }
`;

export const Text = styled.p`
    width: 80%;
    font-weight: 400;
    font-size: var(--medium);
    color: var(--white);
    min-height: 150px;

    @media screen and (max-width: ${width.tablet}px) {    
        font-size: var(--small);
    }
`;

export const LowerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    
    flex-wrap: wrap;
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const Icons = styled.img`
    
`;

export const Link = styled.a`
    font-weight: 500;
    font-size: var(--medium);
    text-decoration: none;
    color: var(--blue);
    cursor: pointer;

    @media screen and (max-width: ${width.tablet}px) {    
        font-size: var(--small);
    }

    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`;
