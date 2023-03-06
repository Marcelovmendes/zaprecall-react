import React, { useState } from "react";
import {
  FlashCardContainer,
  FrontCard,
  BackCard,
  ResultCard,
  ContainerOptions,
  Red,
  Orange,
  Green,
} from "./styled";

import seta_play from "../../assets/seta_play.png";
import seta_virar from "../../assets/seta_virar.png";
import icone_certo from "../../assets/icone_certo.png";
import icone_erro from "../../assets/icone_erro.png";
import icone_quase from "../../assets/icone_quase.png";

const FlashCard = (props) => {
  const [turnFrontCard, setTurnFrontCard] = useState(true);
  const [turnBackCard, setTurnBackCard] = useState(false);
  const [resultCard, setResultCard] = useState(false);
  const [ textdecoration, setTextdecoration]= useState(false);
  const [icon, setIcon]= useState("answered");
  console.log(icon)
  const handleTurnCard = () => {
    setTurnFrontCard(false);
    setTurnBackCard(true);
  };
  const handleResultCard = () => {
    setTurnFrontCard(false);
    setTurnBackCard(false)
    setResultCard(true);
  };

  const handleResetCards = (coloricon) => {
    setIcon(coloricon);
    setTurnFrontCard(true);
    setTurnBackCard(false)
    setResultCard(false);
    setTextdecoration(true);
    props.handleCardsCompleted();
  };
  const selectedIcon = ()=>{
    switch(icon){
      case 'green':
      return icone_certo
      case 'red':
        return icone_erro
        case 'orange':
          return icone_quase
          default:
            return seta_play
    }
    }
  return (
    <>
    <FlashCardContainer data-test="flashcard">
      <FrontCard displayFront={turnFrontCard} color={icon} textdecoration={textdecoration}>
        <span data-test="flashcard-text">{props.index}</span>
        <img onClick={handleTurnCard} data-test="play-btn" src={selectedIcon()} alt="icon quest" />
      </FrontCard>
      <BackCard displayBack={turnBackCard}>
        <span data-test="flashcard-text">{props.answer}</span>
        <img onClick={handleResultCard} src={seta_virar} data-test="turn-btn" alt="a" />
      </BackCard>
      <ResultCard displayResult={resultCard}>
        <span data-test="flashcard-text">{props.answer}</span>
        <ContainerOptions>
          <Red data-test="no-btn" onClick={()=>handleResetCards('red')}>
            <h1>Não lembrei</h1>
          </Red>
          <Orange data-test="partial-btn"onClick={()=>handleResetCards('orange')}>
            <h2>Quase não lembrei</h2>
          </Orange>
          <Green data-test="zap-btn" onClick={()=>handleResetCards('green')}>
            <h3>Zap!</h3>
          </Green>
        </ContainerOptions>
      </ResultCard>
    </FlashCardContainer>
    </>
    
  );
};

export default FlashCard;