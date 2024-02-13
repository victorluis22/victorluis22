import React from "react";
import { Container, Text, Wrapper } from "./style";
import ContactBadges from "../../Components/ContactBadges";

const Footer: React.FC = () => {

    return(
        <Container>
            <Wrapper>
                <ContactBadges />
                <Text>Feito por Victor</Text>
            </Wrapper>
        </Container>
    )
}

export default Footer