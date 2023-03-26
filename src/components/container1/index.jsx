import React from "react";
import { PrimaryOrange } from "../../config/colors";
import {H1, Description, Container} from './styled';

function Container1() {
    const canvasRef = React.useRef();
    
    React.useEffect(() => {
     const canvas = canvasRef.current;
     if(canvas !== null) {
         const ctx = canvas.getContext('2d');
    
        const borderIMG = new Image();
        borderIMG.src = '/images/Border.png';
        borderIMG.onload = () => ctx.drawImage(borderIMG, 0, 106); 
     }
    }, [canvasRef])
    return(
        <React.Fragment>
            <Container>
            <H1>O guia do iniciante em <span style={{color: PrimaryOrange}}>Copywriting</span></H1>
            <Description>Gere renda escrevendo textos de anúncios, roteiros para internet ou mesmo gerendo vendas para seu negócio. Conquiste o resultado que você nunca imaginou.</Description>
            <canvas ref={canvasRef} id="BorderBottom" style={{position: 'absolute', left: 0, width: '100%', height: '190px'}}>You browser doesnt has support to this tag</canvas>
           <img src="/images/ebook.webp" style={{marginTop: '30px',position: 'absolute', right: 0, zIndex: 3}} width={160} alt="Foto do livro"/>
            </Container>
        </React.Fragment>
    );
}

export default Container1;