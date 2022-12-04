import FlashCards from "./Flash-cards";
import Footer from "./Footer";
import Title from "./Title";
import styled from "styled-components";
import GlobalStyle from "./assets/Styles/GlobalStyles";


function App() {
  return (
    <ScreenContainer>
      <GlobalStyle />

      <Title />
      <FlashCards />
      <Footer />

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