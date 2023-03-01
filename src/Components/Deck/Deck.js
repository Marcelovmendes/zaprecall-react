import seta_play from "../../assets/seta_play.png";
import seta_virar from "../../assets/seta_virar.png";
import {
  ContainerCard,
  FlashCard,
  FrontCard,
  BackCard,
  ResultCard,
  ContainerOptions,
  Red,
  Orange,
  Green,
} from "./styled";
//import cards from "../cards";
const Flashcards = (props) => {
console.log(props)
  return (
    <>
      <ContainerCard>
        <FlashCard>
          <FrontCard displayFront={props.turnFrontCard} >
            <span>Pergunta 1</span>
            <img onClick={props.handleTurnCard} src={seta_play} alt="quest 1" />
          </FrontCard >
          <BackCard displayBack={props.turnBackCard}>
            <span>O que é JSX?</span>
            <img  onClick={props.handleResultCard} src={seta_virar} />
          </BackCard>
          <ResultCard displayResult={props.resultCard}>
            <span >JSX é uma sintaxe para escrever HTML dentro do JS.</span>
            <ContainerOptions>
              <Red  onClick={props.handleResetCards}><h1>Não lembrei</h1>
              </Red>
              <Orange onClick={props.handleResetCards}><h2>Quase não lembrei</h2></Orange>
              <Green  onClick={props.handleResetCards}><h3>Zap!</h3></Green>
            </ContainerOptions>
          </ResultCard>
        </FlashCard>
      </ContainerCard>
    </>
  );
};
export default Flashcards;
