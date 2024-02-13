import styled from "styled-components";

import { width } from "../../../../Config";

export const Container = styled.nav`
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (min-width: ${width.notebook+1}px) {    
        display: none;
    }
`;

export const Text = styled.a`
    font-weight: 300;
    font-size: var(--medium);
    margin: 20px 15px;
    cursor: pointer;
    text-decoration: none;
    color: var(--white);

    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`;

export const Logo = styled.button`
    margin: 20px 15px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: var(--white);

    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`;

interface MenuProps{
    statusVisible: boolean
}

export const Menu = styled.nav<MenuProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 80px;
    transition: 0.2s;

    ${({statusVisible}) => statusVisible ? 
        `opacity: 1;` 
        : 
        `opacity: 0;`
        
    }
   

    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px 0px 0px 15px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(0px);

    
`;
