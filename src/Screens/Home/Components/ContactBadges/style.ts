import styled from "styled-components";

export const Container = styled.div`
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