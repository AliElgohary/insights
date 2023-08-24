import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Header/Heading";
import InsightsAI from "./ui/Insghits/ZeeToolsInsgts";
import Chart from "./ui/InsightChart/Chart";

const AppWrapper = styled.div`
  background-color: #F9FAFB;
  margin: 30px 80px;
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
