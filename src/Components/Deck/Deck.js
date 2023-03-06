import FlashCard from "../Deck/Flashcard";
import Results from "./Result";
import { ContainerCard } from "./styled";
const Deck = (props) => {
  return (
    <>
      <ContainerCard>
        {props.questions.map((q, i) => {
          return (
            <FlashCard
              key={i}
              index={`Pergunta ${i + 1}`}
              question={q.question}
              answer={q.answer}
              handleCardCompleted={props.handleCardCompleted}
              color={props.color}
            />
          );
        })}
      </ContainerCard>
      <Results CardsCompleted={props.CardsCompleted} />
    </>
  );
};

export default Deck;
