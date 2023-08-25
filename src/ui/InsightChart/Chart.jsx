import CustomisedChart from "./CustomBarChart";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 16px;
  background: #fff;
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.1);
  margin: 50px 30px;
`;

function Chart() {
  return (
    <Container>
      <CustomisedChart />
    </Container>
  );
}

export default Chart;
