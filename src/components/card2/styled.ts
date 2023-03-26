import styled from "styled-components";

export const Card = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 60px;
    padding: 10px;
    border-radius: 10px;
    margin: auto;
    text-align: left;

    @media screen and (min-width: 600px){
        width: 40%;
    }
`;

export const Content = styled.p`
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
color: #000000;
`;

export const Icon = styled.div`
    background: #141414;
    padding: 10px;
    border-radius: 10px;
    width: 40px;
    height: 37px;
    text-align: center;
`;