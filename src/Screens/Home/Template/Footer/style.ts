import styled from "styled-components";
import { width } from "../../../../Config";

export const Container = styled.div`
    background-color: #000;
`;

export const Text = styled.p`
    width: 100%;
    font-weight: 400;
    font-size: var(--small);
    text-align: center;
    color: var(--white);

    @media screen and (max-width: ${width.tablet}px) {    
        font-size: var(--small);
    }
`;