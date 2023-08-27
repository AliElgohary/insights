import { Table } from "@mui/joy";
import styled from "styled-components";

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
  transform: translateY(-50%);
  font-size: 20px;
  top: 50%;
  left: 5%;
  margin: 0;
`;

function BasicTable() {
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
            <h2>Traffic</h2>
          </td>
          <LeftSide>
            <Button>Source</Button>
            <Button style={{ backgroundColor: "transparent" }}>City</Button>
          </LeftSide>
        </tr>
      </thead>
      <tbody>
        <tr>
          <RightSide>
            <Container>
              <RedBackground />
              <Text>Google</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        <tr>
          <RightSide>
            <Container>
              <RedBackground style={{ width: "75%" }} />
              <Text>Twitter</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        <tr>
          <RightSide>
            <Container>
            <RedBackground style={{ width: "50%" }} />
              <Text>Facebook</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        <tr>
          <RightSide>
            <Container>
            <RedBackground style={{ width: "25%" }} />
              <Text>Linkedin</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        <tr>
          <RightSide>
            <Container>
            <RedBackground style={{ width: "12%" }} />
              <Text>Youtupe</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        <tr>
          <RightSide>
            <Container>
            <RedBackground style={{ width: "5%" }} />
              <Text>Other</Text>
            </Container>
          </RightSide>
          <LeftSide>30,000</LeftSide>
        </tr>
        
        <tr>
          <td colSpan={2}>
            <Button>See traffic sources</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicTable;
