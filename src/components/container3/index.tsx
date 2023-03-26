import React from 'react';
import { Container, H2, Cards } from './styled';
import Card2 from '../card2';
import { PrimaryOrange } from '../../config/colors';
import ContainedButton from '../buttons/containedButton';
function Container3(): JSX.Element {
    return (
        <React.Fragment>
            <Container>
            <H2>O que você irá aprender?</H2>
            <Cards>
            <Card2 content='Os principais conceitos de copywriter'/>
            <Card2 content='Como idealizar suas ideias'/>
            <Card2 content='A maneira certa de persuadir o seu cliente'/>
            <Card2 content='Aprendizado 4'/>
            <Card2 content='Aprendizado 5'/>

            </Cards>
            <ContainedButton textButton='comece agora' bgColor={PrimaryOrange}/>
            </Container>
        </React.Fragment>
    )
};

export default Container3;