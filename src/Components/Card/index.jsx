import styled from "styled-components";

//Componentes Container, Box, Nome, ID, e Imagem que formam o POkeCard
export const Container = styled.div`
    margin: 12% 5%;
    width: auto;
    min-height: 700px;
    max-height: 800px;
    height: 100%;
    justify-content: center;
    display: grid;
    align-items: center;
    text-align: center;
    grid-template-columns: 3fr 3fr 3fr 3fr 3fr; 
    grid-template-rows: 0.4fr 0.4fr 0.4fr 0.4fr;
    grid-gap: 1vw;
`;
export const Box = styled.div`
    background: #FFFFFF;
    border-radius: 1vw;
    width:100%;   
    height: 100%;
    padding-top: 0%;

    :hover{
    border: 0.15vw solid #bb3bee; 
    cursor: pointer;
}
    :active{
    border: 0.2vw solid #ee3b94; 
}

`;
export const Nome = styled.h1`
    font-weight: bold;
    font-size: 1.8vw;
    color: #64646e;
    text-transform: capitalize;
    line-height: 2;
    background: #FFFFFF;
    top: 50%;
    bottom: 50%;
    position: relative;
`;
export const ID = styled.p`
    color: rgba(29, 21, 113, 0.5);
    font-size: 1.2vw;
    align-items: center;
    line-height: 2;
    top: 50%;
    bottom: 50%;
    letter-spacing: 0em;
    background: #FFFFFF; 
    position: relative;
    font-weight: bold;
`;
export const Imagem = styled.img`
    background: #FFFFFF;
    position: absolute;
    width: 10vw;   
    height: 10vw;
    margin: 3vw;
    display: block;
`;

