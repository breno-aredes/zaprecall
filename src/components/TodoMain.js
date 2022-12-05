import FlashCards from "./Flash-cards";
import Footer from "./Footer";
import Title from "./Title";
import styled from "styled-components";
import GlobalStyle from "../assets/Styles/GlobalStyles";
import { useState } from "react";

export default function TodoMain() {
    const [count, setCount] = useState(0)
    const [iconFooter, setIconFooter] = useState([])

    return (
        <ScreenContainer>
            <GlobalStyle />

            <Title />
            <FlashCards setCount={setCount} count={count} iconFooter={iconFooter} setIconFooter={setIconFooter} />
            <Footer count={count} iconFooter={iconFooter} />

        </ScreenContainer>
    )
}

//styled components 

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  `