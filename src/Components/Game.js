  import logo from "../assets/logo.png";
  import Deck from "./Deck/Deck"
  import styled from 'styled-components';
  import cards from "../cards" 
  import Footer from "./Deck/Footer";
import { useState } from "react";
  const Game = () => {
   const [cardsCompleted, setCardsCOmpleted]= useState(0)
   console.log(cardsCompleted)
   console.log(cards.length)
   const handleCardsCompleted =()=>{
    if(cardsCompleted <= cards.length)
    setCardsCOmpleted(cardsCompleted+1)
   }
    let questions = cards
    let allquestions = cards.length
    return (
      <Container>
        <HeaderLogo>
          <img src={logo} alt=""></img>
          <LogoText>
            <h3>ZapRecall</h3>
          </LogoText>
        </HeaderLogo>
        <Deck   
          questions={questions}
          handleCardsCompleted={handleCardsCompleted}
          
        />
        <Footer allquestions={allquestions} cardsCompleted={cardsCompleted}/>
      </Container>
    );
  };
  export default Game;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
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