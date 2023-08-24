import styled from "styled-components";
import DownArrow from "../SVG/DownSVG";

const SpanHeader = styled.span`
  color: #000;
  font-family: Karla;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const LayOut = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  padding: 20px 20px;
  background-color: white;
`;

const Paragraph = styled.p`
  color: #0b0b0b;
  font-family: Karla;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0px 20px;
`;
const Container = styled.div`
  border-radius: 8px;
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: #f4f4f4;
  margin: 30px;
  
`;

function InsigtsBodyComponent() {
  return (
    <Container>
      <LayOut>
        <DownArrow />
        <SpanHeader>
          Signups are slowing down. -5% new than last week
        </SpanHeader>
      </LayOut>
      <Paragraph>
        Tip: Promote more your product online, and make sure to drive as much
        traffic as possible to the signup form. Here is a article on user
        acquisition
      </Paragraph>
    </Container>
  );
}

export default InsigtsBodyComponent;
