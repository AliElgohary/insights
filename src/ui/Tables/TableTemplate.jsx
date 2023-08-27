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
          <td colSpan={3}>
            <h2 style={{ padding: "0px 0px", margin: "0px 0px" }}>
              User leaderboard
            </h2>
          </td>
        </tr>
      </thead>
      <tr>
        <td>
          <p>E-mail</p>
        </td>
        <td>Friends Invited</td>
        <td>Country</td>
      </tr>
      <tbody>
        <tr>
          <td>john@example.com</td>
          <td>124124</td>
          <td>United States</td>
        </tr>
        <tr>
          <td>jane@example.com</td>
          <td>52121</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>alice@example.com</td>
          <td>89324</td>
          <td>Australia</td>
        </tr>
        <tr>
          <td>michael@example.com</td>
          <td>71241</td>
          <td>United Kingdom</td>
        </tr>
        <tr>
          <td>susan@example.com</td>
          <td>30982</td>
          <td>South Korea</td>
        </tr>
        <tr>
          <td colSpan={3}>
            <Button>See leaderboard</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicTable;
