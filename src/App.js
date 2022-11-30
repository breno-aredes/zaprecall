import FlashCards from "./Flash-cards";
import Footer from "./Footer";
import Title from "./Title";
import styled from "styled-components";


function App() {
  return (
    <ScreenContainer>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;`