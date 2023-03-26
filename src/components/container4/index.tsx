import React from 'react';
import { Container, H2, H4, Feedbacks } from './styled';
import Feedback from '../feedback';
import Carousel from 'react-material-ui-carousel';
function Container4(): JSX.Element {
    return (
        <React.Fragment>
            <Container>
                <div className="texts">
                    <H2>Depoimentos</H2>
                    <H4>Entenda como ajudamos os nossos alunos a se tornarem experts no assunto.</H4>

                </div>
                <Carousel sx={{width: '100%', height: '400px', padding: '10px', margin: 'auto'}} animation="slide" autoPlay={false} cycleNavigation={false}>
                    <Feedback depoimento='Agradeço pelos ensinamentos , alavanquei meu negócio graça a este curso!!!' PersonName='Suzana Gomes' PersonJob='MKT Service LTDA' pathIMG='/images/woman.png' altIMG='Foto da Suzana Gomes'/>
                    <Feedback depoimento='Fico grato por tudo que aprendi. Creio que tive outra visão a respeito do mercado digital após esse produto.
' PersonName='Alex Magno' PersonJob='Escritor e Empresário
' pathIMG='/images/man.png' altIMG='Foto da Suzana Gomes'/>
                    
                </Carousel>
            </Container>
        </React.Fragment>
    )
};

export default Container4;