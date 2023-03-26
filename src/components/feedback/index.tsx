import React from 'react';
import { CardFeedback, TopCard, Depoimento, BottomCard, PersonName, PersonDescription, PersonJob } from './styled';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface Props {
    depoimento: string;
    PersonName: string;
    PersonJob: string;
    pathIMG: string;
    altIMG: string;
}
function Feedback(props: Props): JSX.Element {
    return (
        <React.Fragment>
            <CardFeedback>
                <TopCard >
                    <FormatQuoteIcon style={{ transform: 'scaleX(-1)', fontSize: '60px' }} />
                    <Depoimento>{props.depoimento}</Depoimento>
                </TopCard>
                <BottomCard>
                    <img src={props.pathIMG} alt={props.altIMG} width={40} height={40}/>
                    <PersonDescription>
                        <PersonName>{props.PersonName}</PersonName>
                        <PersonJob>{props.PersonJob}</PersonJob>
    
                    </PersonDescription>
                </BottomCard>
            </CardFeedback>
        </React.Fragment>
    );
};

export default Feedback;