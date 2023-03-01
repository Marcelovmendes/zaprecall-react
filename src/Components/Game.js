import logo from "../assets/logo.png";
import Deck from "./Deck/Deck"
import Results from "./Result";
import styled from 'styled-components';
import { useState } from "react";
const Game = () => {
  const [turnFrontCard, setTurnFrontCard] = useState(true);
  const [turnBackCard, setTurnBackCard] = useState(false);
  const [resultCard, setResultCard] = useState(false);

  const handleTurnCard = () => {
    setTurnFrontCard(false);
    setTurnBackCard(true);
  };

  const handleResultCard = () => {
    setTurnFrontCard(false);
    setTurnBackCard(false)
    setResultCard(true);
  };

  const handleResetCards = () => {
    setTurnFrontCard(true);
    setTurnBackCard(false)
    setResultCard(false);
  };
  return (
    <Container>
      <HeaderLogo>
        <img src={logo} alt=""></img>
        <LogoText>
          <h3>ZapRecall</h3>
        </LogoText>
      </HeaderLogo>
      <Deck
        turnFrontCard={turnFrontCard}
        turnBackCard={turnBackCard}
        handleTurnCard={handleTurnCard}
        handleResultCard={handleResultCard}
        resultCard={resultCard}
        handleResetCards={handleResetCards}
      />
      <Results />
    </Container>
  );
};
export default Game;

const Container = styled.div`
  height: 667px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const HeaderLogo= styled.div`
  height: 60px;
  width: 260px;
  display: flex;
  flex-direction: row;
  margin-left: 60px;
  margin-top: 48px;
  img{
  height: 60px;
  width: 52px;
  border-radius: 0px;    
  }
`
const LogoText = styled.div`
  height: 44px;
  width: 203px;
  border-radius: nullpx;
h3{
  font-family: "Righteous";
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: white;
  text-align: center;  
}
`
