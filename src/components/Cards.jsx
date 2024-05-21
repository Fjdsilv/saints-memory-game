import SigleCard from "./SigleCard"

const Cards = ({ cards, handleChoice, choiceOne, choiceTwo, disabled }) => {
  return (
    <section className="box">
      <article className="card-grid">
      {
        cards.map((card) => {
          return <SigleCard 
                    key={card.id} 
                    card={card}
                    handleChoice={handleChoice}
                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                    disabled={disabled}
                />
        })
      }
      </article>
    </section>
  )
}
export default Cards