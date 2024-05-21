import { useEffect, useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { nanoid } from "nanoid";

const cardImages = [
  { "src" : "/img/jesus-01.jpg", matched: false },
  { "src" : "/img/saint-anthony-01.jpg", matched: false },
  { "src" : "/img/saint-john-b-01.jpg", matched: false },
  { "src" : "/img/saint-joseph-01.jpg", matched: false },
  { "src" : "/img/saint-mary-01.jpg", matched: false },
  { "src" : "/img/saint-peter-01.jpg", matched: false },
]


const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort((a, b) => Math.random() - 0.5)
    .map((card) => ({ ...card, id: nanoid() }))

    // setChoiceOne(null);
    // setChoiceTwo(null);
    setCards(shuffleCards);
    setTurns(0);
    
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card) 
  }

  // console.log(cards, turns);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((oldTurns) => oldTurns + 1);
    setDisabled(false);
  }

  useEffect(() => {
    shuffleCards();
  }, [])
  
  useEffect(() => {
    if (choiceOne && choiceTwo) {
    setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            }
            else
            {
              return card;
            }
          })
        })
        resetTurn();
      }
      else {
        setTimeout(()=> resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])
  
  return (
    <main>
      <Header />
      <button
        type="button"
        className="button"
        onClick={shuffleCards}
      >
      New Game
      </button>
      <Cards
        cards={cards}
        handleChoice={handleChoice}
        choiceOne={choiceOne}
        choiceOTwo={choiceTwo}
        disabled={disabled}
      />
      <p style={{padding: "2rem", fontSize: "2rem", color: "#7AA2E3"}}>Turns: {turns}</p>
    </main>
  )
}
export default App