// import styled from "styled-components";
import styled from "styled-components";
import InsightHeader from "./InsightHeader";
import InsightsBody from "./InsightsBody";

const InsightStyle = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 16px;
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.1);
`;
function InsightsAI() {
  return (
    <InsightStyle>
      <InsightHeader />
      <InsightsBody />
    </InsightStyle>
  );
}

export default InsightsAI;
