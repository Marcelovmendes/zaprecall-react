import logo from "../assets/logo.png"
import Flashcards from "./Flashcards"
import Results from "./Result"
const Game = () =>{

    return (
      <div className="container">
        <div className="header-logo">
            <img src={logo} alt=""></img>
            <div className="text-logo"><h3>ZapRecall</h3></div>
        </div>
        <Flashcards/>
        <Results/>
      </div>
    )
}
export default Game