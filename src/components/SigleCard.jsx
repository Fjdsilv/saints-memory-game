const SigleCard = ({ card, handleChoice, flipped, disabled }) => {
    const { src } = card;
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }
  return (
    <div className="card">
        <div className={flipped ? "flipped" : " "}>
            <img 
                className="front"
                src={src} 
                alt="card front" />
            <img 
                className="back"
                src="/img/flordelis-01.jpg" 
                alt="card back" 
                onClick={handleClick}
            />
        </div>
    </div>
  )
}
export default SigleCard