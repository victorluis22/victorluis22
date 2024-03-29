import styled from "styled-components";
import backgroundImg from "../../../../assets/images/bannerImage.webp";

export const Container = styled.div`
    background-image: url(${backgroundImg});
    background-attachment: fixed;
    width: 100%;    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 10px 8px;
`;