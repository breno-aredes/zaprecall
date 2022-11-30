import { useState } from "react"
import seta_play from "./assets/img/seta_play.png"
import seta_virar from "./assets/img/seta_virar.png"
import cards from "./Cards"
import styled from "styled-components";



export default function FlashCards() {
    const [clickedIndex, setIndex] = useState([])
    const [clickedIndexTwo, setIndexTwo] = useState([])

    function clickedCard(index) {
        setIndex([...clickedIndex, index])
    }

    function clickedCardTwo(index) {
        setIndexTwo([...clickedIndexTwo, index])
    }

    return (
        <>
            {cards.map((card, index) => {
                if (clickedIndex.includes(index) && clickedIndexTwo.includes(index)) {
                    return (
                        <OpenQuestion>
                            <p>{card.answer}</p>
                            <ContainerButtons>
                                <button>Não lembrei</button>
                                <button>Quase não lembrei</button>
                                <button>Zap!</button>
                            </ContainerButtons>
                        </OpenQuestion>)

                }
                else if (clickedIndex.includes(index)) {
                    return (
                        <OpenQuestion>
                            <p>{card.question}</p>
                            <img src={seta_virar} onClick={() => clickedCardTwo(index)} />
                        </OpenQuestion>)

                }
                else {
                    return (
                        <ClosedQuestion>
                            <p>{clickedIndex.includes(index) ? `${card.question}` : `Pergunta ${index + 1}`} </p>
                            <img src={seta_play} onClick={() => clickedCard(index)} />
                        </ClosedQuestion>)

                }
            }
            )}
        </>
    )
}

//styled components 

const ClosedQuestion = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }`

const OpenQuestion = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`

const ContainerButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    button {
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding: 5px;}
`