import styled from "styled-components";
import { width } from "../../../../Config";

export const Container = styled.div`
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Wrapper = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${width.tablet}px) {    
        justify-content: center;
        flex-direction: column;
    }
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: var(--small);
    text-align: center;
    color: var(--white);

    @media screen and (max-width: ${width.tablet}px) {    
        font-size: var(--small);
    }
`;