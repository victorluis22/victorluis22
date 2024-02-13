import styled from "styled-components";
import { width } from "../../../../Config";

export const Container = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    max-width: var(--max-width);
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: var(--large);
    text-align: center;
    width: 100%;
    color: var(--light-black);
    margin-top: 30px;
    margin-bottom: 30px;

    @media screen and (max-width: ${width.tablet}px) {    
        font-size: var(--medium);
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Icons = styled.img`
    margin: 0;
`;
