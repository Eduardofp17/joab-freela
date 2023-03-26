import styled from "styled-components";

export const CardFeedback = styled.div`
    background: #E0E0E0;
    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    width: 324px;
height: 171.58px;
padding: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: auto;
`;

export const TopCard = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Depoimento = styled.p`
    font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
`;

export const BottomCard = styled.div`
     display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const PersonDescription = styled.div`
    display: flex;
    flex-direction: column;
     align-items: center;
`;

export const PersonName = styled.p`
    font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 15px;
text-align: left;
`;

export const PersonJob = styled.span`
    font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
padding-bottom: 10px;
color: rgba(0, 0, 0, 0.7);
`;
