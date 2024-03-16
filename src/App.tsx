import styled from "styled-components";
import Header from "./components/Header";
import Timer from "./components/Timer";
import PlayButton from "./components/PlayButton";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 590px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  background-color: tomato;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Timer />
      <PlayButton />
      <Footer />
    </Wrapper>
  );
}

export default App;
