import { useState } from "react"
import seta_play from "./assets/img/seta_play.png"
import cards from "./Cards"
import styled from "styled-components";



export default function FlashCards() {
    const [clickedIndex, setIndex] = useState([])

    function clickedCard(index) {
        setIndex(...clickedIndex, index)
    }

    return (
        <>
            {cards.map((card, index) =>
                <ClosedQuestion>
                    <QuestionP>Pergunta {index + 1}</QuestionP>
                    <img src={seta_play} onClick={() => clickedCard(index)} />
                </ClosedQuestion>)
            }
        </>
    )
}

//{if (clickedIndex.includes(index))}
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
  justify-content: space-between;`

const QuestionP = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
`