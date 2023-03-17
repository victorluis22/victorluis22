import React from "react";
import { Container, Text } from "./style";
import RotatingPc from "../../Components/RotatingPc";


const Footer: React.FC = () => {
    return(
        <Container>
            <RotatingPc />
            <Text>Copyright © 2023 Victor. All Rights Reserved.</Text>
        </Container>
    )
}

export default Footer