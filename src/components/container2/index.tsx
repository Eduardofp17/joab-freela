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
                <Card title='Empreendedores' description='que precisam alavancar vendas para voar alto!'icon={<AttachMoneyIcon style={{fontSize: '255px', margin: 'auto', color: '#403C37 ', opacity: '0.15'}}/>}/>
                <Card title='Empreendedores' description='que precisam alavancar vendas para voar alto!'icon={<AttachMoneyIcon style={{fontSize: '255px', margin: 'auto', color: '#403C37 ', opacity: '0.15'}}/>}/>
                <Card title='Empreendedores' description='que precisam alavancar vendas para voar alto!'icon={<AttachMoneyIcon style={{fontSize: '255px', margin: 'auto', color: '#403C37 ', opacity: '0.15'}}/>}/>
                <Card title='Empreendedores' description='que precisam alavancar vendas para voar alto!'icon={<AttachMoneyIcon style={{fontSize: '255px', margin: 'auto', color: '#403C37 ', opacity: '0.15'}}/>}/> 
            </Cards>
            <ContainedButton textButton='Quero conhecer a oferta' bgColor={PrimaryOrange}/>
            </Container>
        </React.Fragment>
    )
};

export default Container2;