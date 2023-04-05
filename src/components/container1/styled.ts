import styled from 'styled-components'
import { PrimaryBg } from '../../config/colors';
export const Container = styled.section`
    background-color: ${PrimaryBg};
    padding: 20px;
    padding-bottom: 190px;
`;
export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    margin: 0;
    @media screen and (min-width: 900px){
        font-size: 35px;
    }
`;

export const Description = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.02em;
    max-width: 500px;
    margin-top: 20px;
    @media screen and (min-width: 900px){
        font-size: 18px;
        margin: auto;
        margin-top: 20px;
    }
`;