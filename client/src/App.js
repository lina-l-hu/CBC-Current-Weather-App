import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Main from "./Main/Main"

function App() {
  return (
    <Page>
      <GlobalStyles />
      <Header />
      <Main />
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;

`;

export default App;
