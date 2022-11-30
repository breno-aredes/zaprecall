import seta_play from "./assets/img/seta_play.png"
import cards from "./Cards"


export default function FlashCards() {
    return (
        <>
            {cards.map((card, index) =>
                <div class="pergunta-fechada">
                    <p>Pergunta {index + 1}</p>
                    <img src={seta_play} />
                </div>)
            }
        </>
    )
}