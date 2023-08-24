import styled from "styled-components";
import PropTypes from 'prop-types';

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

function InsigtsBodyComponent(props) {
  console.log(props);
  return (
    <Container>
      <LayOut>
        {props.arrow}
        <SpanHeader>
          {props.header}
        </SpanHeader>
      </LayOut>
      <Paragraph>
        Tip: Promote more your product online, and make sure to drive as much
        traffic as possible to the signup form. Here is an article on user
        acquisition
      </Paragraph>
    </Container>
  );
}

InsigtsBodyComponent.propTypes = {
  arrow: PropTypes.element.isRequired,
  header: PropTypes.string.isRequired,
};


export default InsigtsBodyComponent;
