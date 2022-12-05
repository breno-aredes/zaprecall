import { useState } from "react"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"
import icone_certo from "../assets/img/icone_certo.png"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"
import cards from "./Cards"
import styled from "styled-components";



export default function FlashCards(props) {
    const [clickedIndex, setIndex] = useState([])
    const [clickedIndexTwo, setIndexTwo] = useState([])
    const [clickedIndexThree, setIndexThree] = useState([])
    const [clickedColor, setColor] = useState([])
    const [iconeList, setIcone] = useState([])

    const { setCount, count } = props

    function clickedCard(index) {
        setIndex([...clickedIndex, index])
    }

    function clickedCardTwo(index) {
        setIndexTwo([...clickedIndexTwo, index])
    }

    function ClickButton(index, color, icone) {
        setIndexThree([...clickedIndexThree, index])
        clickedColor[index] = color
        setColor(clickedColor)
        iconeList[index] = icone
        setIcone(iconeList)
        setCount(count + 1)
    }

    return (
        <>
            {cards.map((card, index) => {
                if (!clickedIndex.includes(index) || clickedIndexThree.includes(index)) {
                    return (
                        <ClosedQuestion key={index} data-test="flashcard" color={clickedIndexThree.includes(index) ? `${clickedColor[index]}` : '#333333'}
                            decoration={clickedIndexThree.includes(index) && 'line-through'}>
                            <p data-test="flashcard-text">Pergunta {index + 1} </p>
                            <img src={!clickedIndexThree.includes(index) ? seta_play : iconeList[index]} onClick={() => clickedCard(index)}
                                data-test={!clickedIndexThree.includes(index) ? 'play-btn' : `${(clickedColor[index] === '#FF3030' && 'no-icon') ||
                                    (clickedColor[index] === "#FF922E" && "partial-icon") || (clickedColor[index] === '#2FBE34' && 'zap-icon')}`} />
                        </ClosedQuestion>)
                }
                if (clickedIndex.includes(index)) {
                    return (
                        <OpenQuestion key={index} data-test="flashcard" display={!clickedIndexTwo.includes(index) ? "flex" : "none"}>
                            <p data-test="flashcard-text">{!clickedIndexTwo.includes(index) ? `${card.question}` : `${card.answer}`}</p>
                            <img src={seta_virar} onClick={() => clickedCardTwo(index)} data-test="turn-btn" />
                            <ContainerButtons display={clickedIndexTwo.includes(index) ? 'flex' : "none"} >
                                <Button data-test="no-btn" color="#FF3030" onClick={() => ClickButton(index, '#FF3030', icone_erro)}>Não lembrei</Button>
                                <Button data-test="partial-btn" color="#FF922E" onClick={() => ClickButton(index, '#FF922E', icone_quase)}>Quase não lembrei</Button>
                                <Button data-test="zap-btn" color='#2FBE34' onClick={() => ClickButton(index, '#2FBE34', icone_certo)}>Zap!</Button>
                            </ContainerButtons>
                        </OpenQuestion>
                    )
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
    color: ${props => props.color};
    text-decoration-line: ${props => props.decoration} ;
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