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

const FlashCard = (props) => {
  const [turnFrontCard, setTurnFrontCard] = useState(true);
  const [turnBackCard, setTurnBackCard] = useState(false);
  const [resultCard, setResultCard] = useState(false);
  const [ textdecoration, setTextdecoration]= useState(false);
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
    props.handleCardCompleted(props.color,props.deckIndex);
    setTextdecoration(true)
  };
  return (
    <>
    <FlashCardContainer>
      <FrontCard displayFront={turnFrontCard} textdecoration={textdecoration}>
        <span style={{ color: props.color }}>{props.index}</span>
        <img onClick={handleTurnCard} src={seta_play} alt="a" />
      </FrontCard>
      <BackCard displayBack={turnBackCard}>
        <span>{props.answer}</span>
        <img onClick={handleResultCard} src={seta_virar} alt="a" />
      </BackCard>
      <ResultCard displayResult={resultCard}>
        <span>{props.answer}</span>
        <ContainerOptions>
          <Red onClick={()=>handleResetCards('red')}>
            <h1>Não lembrei</h1>
          </Red>
          <Orange onClick={()=>handleResetCards('orange')}>
            <h2>Quase não lembrei</h2>
          </Orange>
          <Green onClick={()=>handleResetCards('green')}>
            <h3>Zap!</h3>
          </Green>
        </ContainerOptions>
      </ResultCard>
    </FlashCardContainer>
    </>
    
  );
};

export default FlashCard;