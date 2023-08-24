import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Header/Heading";
import InsightsAI from "./ui/Insghits/ZeeToolsInsgts";
import Chart from "./ui/InsightChart/Chart";

const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: #red;
`;

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Heading />
      <Chart />
      <InsightsAI />
    </AppWrapper>
  );
}

export default App;
