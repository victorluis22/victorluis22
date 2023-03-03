import styled from "styled-components";
import { width } from "../../../../Config";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: var(--large);

    @media screen and (max-width: ${width.tablet}px) {    
        font-size: var(--medium);
    }
`;

export const SubTitle = styled.p`
    font-weight: 400;
    font-size: var(--small);

    @media screen and (max-width: ${width.tablet}px) {    
        font-size: var(--extra-small);
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

export const Logo = styled.a`
    margin: 10px;
    cursor: pointer;
    color: var(--white);
    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`;

