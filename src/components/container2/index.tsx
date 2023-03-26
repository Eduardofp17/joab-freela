import React from 'react';
import { Container, H2, Cards } from './styled';
import Card from '../card';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContainedButton from '../buttons/containedButton';
import { PrimaryOrange } from '../../config/colors';
function Container2(): JSX.Element {
    return (
        <React.Fragment>
            <Container>
            <H2>Nosso e-book foi feito para vocês:</H2>
            <Cards>
                <Card path='../../public/images/moneyIMG.png' title='Empreendedores' description='que precisam alavancar vendas para voar alto!'icon={<AttachMoneyIcon style={{fontSize: '255px', margin: 'auto', color: '#403C37 ', opacity: '0.15'}} />}/>
                <Card  path='../../public/images/influenceIcon.png' title='Influenciadores' description='que precisam das melhores estratégias do mercado digital na palma da mão.
'icon={<AttachMoneyIcon style={{fontSize: '255px', margin: 'auto', color: '#403C37 ', opacity: '0.15'}}/>}/>
                <Card path='../../public/images/agenciaIcon.png' title='Agências' description='que precisam se especializar ainda mais para atender seus clientes'icon={<AttachMoneyIcon style={{fontSize: '255px', margin: 'auto', color: '#403C37 ', opacity: '0.15'}}/>}/>
                <Card path='../../public/images/studentIcon.png' title='Estudantes' description='que possuem sede de conteúdo e querem aprender tudo sobre'icon={<AttachMoneyIcon style={{fontSize: '255px', margin: 'auto', color: '#403C37 ', opacity: '0.15'}}/>}/> 
            </Cards>
            <ContainedButton textButton='Quero conhecer a oferta' bgColor={PrimaryOrange}/>
            </Container>
        </React.Fragment>
    )
};

export default Container2;