import React from 'react';
import { CardComponent, Title, Description } from './styled';
interface Props{
    title: string;
    description: string;
    icon: JSX.Element;
    path: string;
}
function Card(props: Props): JSX.Element {
    return(
        <React.Fragment>
            <CardComponent style={{backgroundImage: `url(${props.path})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain'}}>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <div style={{display: 'none', position: 'absolute', top: 685, left: '17%'}}>
            {props.icon }

            </div>
            </CardComponent>
        </React.Fragment>
    )
}

export default Card;

