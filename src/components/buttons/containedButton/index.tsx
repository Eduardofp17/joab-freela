import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
interface Props{
    textButton: string;
    bgColor: string;
}
function ContainedButton(props: Props): JSX.Element {
    return(
        <React.Fragment>
             <Button variant="contained" 
              style={{
        borderRadius: 15,
        fontStyle: 'normal',
        fontWeight: 700,
        backgroundColor: props.bgColor,
        color: '#000',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
       alignContent: 'center',
       gap: '5px', 
       width: '100%',
       maxWidth: '360px',
       margin: 'auto',
      }}><span style={{paddingRight: '20px'}}></span>{props.textButton} <ArrowForwardIcon style={{border: '2px solid #000', borderRadius: '100px',fontSize: '28px', padding: '1px'}}/></Button>
        </React.Fragment>
    )
}

export default ContainedButton;