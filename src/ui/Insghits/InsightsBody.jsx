import styled from "styled-components";
import InsigtsBodyComponent from "./InsigtsBodyComponent";

const InsightsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

function InsightsBody() {
  return (
    <div>
      <InsightsContainer>
        <InsigtsBodyComponent />
        <InsigtsBodyComponent />
        <InsigtsBodyComponent />
        <InsigtsBodyComponent />
      </InsightsContainer>
    </div>
  );
}

export default InsightsBody;
