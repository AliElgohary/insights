import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  
  color: black;
  font-size: large;
`;

const SmallButtons = styled.button`
  border: none;
  margin: 1px;
  color: #646a75;
  background-color: #f8f9fa;
  font-family: Karla;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 2px;
  box-shadow: 2px 2px 3px #646a75;
  border-radius: 11px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const HeaderTitle = styled.div`
  color: #000;
  font-family: Karla;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

function Heading() {
  return (
    <Header>
      <HeaderTitle> Summer referral competition </HeaderTitle>
      <ButtonContainer>
        <SmallButtons>1h</SmallButtons>
        <SmallButtons>24h</SmallButtons>
        <SmallButtons>30d</SmallButtons>
        <SmallButtons>60d</SmallButtons>{" "}
      </ButtonContainer>
    </Header>
  );
}
export default Heading;
