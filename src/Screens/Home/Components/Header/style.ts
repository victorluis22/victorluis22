import styled from "styled-components";
import { width } from "../../../../Config";

export const Container = styled.nav`
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: ${width.notebook}px) {    
        display: none;
    }
`;

export const Text = styled.p`
    font-weight: 300;
    font-size: var(--medium);
    margin: 20px 15px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`;
