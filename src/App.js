import FlashCards from "./Flash-cards";
import Footer from "./Footer";
import Title from "./Title";
import styled from "styled-components";
import GlobalStyle from "./assets/Styles/GlobalStyles";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <ScreenContainer>
      <GlobalStyle />

      <Title />
      <FlashCards setCount={setCount} count={count} />
      <Footer count={count} />

    </ScreenContainer>
  )
}

export default App;


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