import React from "react";
import styled from "styled-components";
import IconeLogo from "../../assets/images/IconeLogo.png"

//Componentes StyledHeader, Logo, Search, BtnFiltro e BtnLogin que formam o Header/Cabeçalho da página
const StyledHeader = styled.nav`
  display: grid;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Logo = styled.img`
  position: absolute;
  left: 5%;
  height:11%;
  margin-top: 2.5%;
`;
const Search = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 23%;
  position: absolute;
  width: 30%;
  height: 8%;
  margin-top: 10%;
  font-size: 1.3vw;
  background: #FFFFFF;
  justify-content: center;
  border: 0.2vw solid #C5D7DD;
  box-sizing: border-box;
  border-radius: 0.5vw;
`;
const BtnFiltro = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 15%;  
  height: 8%;
  margin-top: 10%;
  right: 26%; 
  color: white;
  background: #FF8F8F;  
  border-radius: 0.5vw;
  border: none;
  font-size: 1.3vw;
  text-align: center;
  font-weight: bold;
  :hover{
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  :active{
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border: 1px solid #f0f0f0; 
  }
`;
const BtnLogin = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 15%;
  height: 8%;
  right: 5%;
  margin-top: 10%;
  color: white;
  background: #5B96EF;
  border-radius: 0.5vw;
  border: none;
  font-size: 1.3vw;
  text-align: center;
  font-weight: bold;
  :hover{
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  :active{
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border: 1px solid #ffffff; 
  }
`;

export default ()=>{
  return(
    <StyledHeader>
      <Logo src= {IconeLogo} alt="Logo Pokedex"/>
        <Search placeholder="  Pesquisar nome do Pokemon ou N°"/> 
        <BtnFiltro>Filtrar pelo tipo</BtnFiltro>
        <BtnLogin>Login/Cadastro</BtnLogin>
    </StyledHeader>
  );
}