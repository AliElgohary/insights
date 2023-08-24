import styled from "styled-components";

const Insight = styled.div`
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px 30px;
`;

const InsightHead = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  font-size: large;
`;

const Head = styled.div`
  color: #000;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px 30px;
`;
const InsightButton = styled.button`
  width: 167px;
  height: 63px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #959595;
  vertical-align: middle;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 30px;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
function InsightHeader() {
  return (
    <InsightHead>
      <div>
        <Head>ZooTools AI-powered insights</Head>
        <Insight>Making analytics simple and actionable</Insight>
      </div>
      <ButtonContainer>
        <InsightButton>Ask Questions</InsightButton>
      </ButtonContainer>
    </InsightHead>
  );
}

export default InsightHeader;
