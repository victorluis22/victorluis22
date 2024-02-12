import styled from "styled-components";
import { width } from "../../../../Config";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    align-items: center;
    flex-direction: column;
    width: 80%;
    max-width: var(--max-width);
    /* background-color: red; */
`;

export const Title = styled.h1`
    width: 100%;
    font-weight: 600;
    font-size: var(--large);
    text-align: center;
    color: var(--light-black);
    margin-top: 30px;
    margin-bottom: 30px;

    @media screen and (max-width: ${width.tablet}px) {    
        font-size: var(--medium);
    }
`;

export const CardContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 10px;
`;