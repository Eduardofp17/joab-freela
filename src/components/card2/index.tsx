import React from 'react';
import {Card, Content, Icon} from './styled';
import DoneIcon from '@mui/icons-material/Done';
interface Props{
    content: string;
}

function Card2(props: Props): JSX.Element {

    return(
        <React.Fragment>
            <Card>
                <DoneIcon style={{backgroundColor: '#141414', fontSize: '35px', padding: '5px', borderRadius: '10px' }} />
                <Content>{props.content}</Content>
            </Card>
       </React.Fragment>
    );
}

export default Card2;
