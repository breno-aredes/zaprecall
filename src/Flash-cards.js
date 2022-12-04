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

    function ClickButton(k) {
        alert(k)
    }

    return (
        <>
            {cards.map((card, index) => {
                if (clickedIndex.includes(index)) {
                    return (
                        <OpenQuestion display={!clickedIndexTwo.includes(index) ? "flex" : "none"}>
                            <p>{!clickedIndexTwo.includes(index) ? `${card.question}` : `${card.answer}`}</p>
                            <img src={seta_virar} onClick={() => clickedCardTwo(index)} />
                            <ContainerButtons display={clickedIndexTwo.includes(index) ? 'flex' : "none"} >
                                <Button color="#FF3030" onClick={() => ClickButton('#FF3030')}>Não lembrei</Button>
                                <Button color="#FF922E" onClick={() => ClickButton('#FF922E')}>Quase não lembrei</Button>
                                <Button color='#2FBE34' onClick={() => ClickButton('#2FBE34')}>Zap!</Button>
                            </ContainerButtons>
                        </OpenQuestion>
                    )
                }
                else {
                    return (
                        <ClosedQuestion>
                            <p>Pergunta {index + 1} </p>
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
    display:${props => props.display}   ;
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`

const ContainerButtons = styled.div`
    display: ${props => props.display};
    width: 100%;
    justify-content: space-between;    
    margin-top: 20px;
    
`

const Button = styled.button`
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
    background-color: ${props => props.color};
    border-radius: 5px;
    border: 1px solid ${props => props.color};
    padding: 5px;
`