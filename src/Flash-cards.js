import seta_play from "./assets/img/seta_play.png"

export default function FlashCards() {
    return (
        <>
            <div class="pergunta-fechada">
                <p>Pergunta 1</p>
                <img src={seta_play} />
            </div>
            <div class="pergunta-fechada">
                <p>Pergunta 2</p>
                <img src={seta_play} />
            </div>
            <div class="pergunta-fechada">
                <p>Pergunta 3</p>
                <img src={seta_play} />
            </div>
            <div class="pergunta-fechada">
                <p>Pergunta 4</p>
                <img src={seta_play} />
            </div>
        </>
    )
}