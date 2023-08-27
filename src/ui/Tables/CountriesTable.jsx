import { Table } from "@mui/joy";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Button = styled.button`
  border: none;
  width: content;
  background-color: #f0f0f0;
  font-family: Karla;
  font-size: 16px;
  color: #000;
  border-radius: 8px;
  padding: 10px 15px;
`;

const RightSide = styled.td`
  text-align: left;
`;

const LeftSide = styled.td`
  text-align: right;
  font-size: 20px;
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
`;

const RedBackground = styled.div`
  position: absolute;
  border-radius: 12px;
  background-color: #fff5c2;
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  position: absolute;
  text-align: center;
  font-size: 20px;
  transform: translateY(-50%);
  top: 50%;
  left: 5%;
  margin: 0;
`;

function BasicTable(props) {
  return (
    <Table
      borderAxis="none"
      aria-label="basic table"
      variant="plain"
      style={{
        outerWidth: "100%",
        innerWidth: "100%",
        border: "1px solid #dee2e6",
        borderRadius: "17px",
        boxShadow: "8px 8px 8px 0px rgba(0, 0, 0, 0.10)",
        alignItems: "center",
        padding: "20px 40px",
      }}
    >
      <thead>
        <tr>
          <td>
            <h2>{props.header}</h2>
          </td>
          <LeftSide>
            <Button>{props.button1}</Button>
            <Button style={{ backgroundColor: "transparent" }}>{props.button2}</Button>
          </LeftSide>
        </tr>
      </thead>
      <tbody>
        <tr>
          <RightSide>
            <Container>
              <RedBackground />
              <Text>🇺🇸 United states</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        <tr>
          <RightSide>
            <Container>
              <RedBackground style={{ width: "75%" }} />
              <Text>🇩🇪 Germany</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        <tr>
          <RightSide>
            <Container>
            <RedBackground style={{ width: "50%" }} />
              <Text>🇳🇱 Netherlands</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        <tr>
          <RightSide>
            <Container>
            <RedBackground style={{ width: "25%" }} />
              <Text>🇮🇳 India</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        <tr>
          <RightSide>
            <Container>
            <RedBackground style={{ width: "12%" }} />
              <Text>🇯🇵 Jaban</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        <tr>
          <RightSide>
            <Container>
            <RedBackground style={{ width: "5%" }} />
              <Text>🌍 Other</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        
        <tr>
          <td colSpan={2}>
            <Button>{props.button3}</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

BasicTable.propTypes = {
  header: PropTypes.element.isRequired,
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
  button3: PropTypes.string.isRequired,
};


export default BasicTable;
