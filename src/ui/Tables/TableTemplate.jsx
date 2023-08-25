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
  margin: 10px;
`;

const Td = styled.td`
  text-align: center;
`;

function BasicTable() {
  return (
    <Table
      borderAxis="none"
      aria-label="basic table"
      variant="plain"
      style={{
        border: "1px solid #dee2e6",
        borderRadius: "17px",
        boxShadow: "8px 8px 8px 0px rgba(0, 0, 0, 0.10)",
        alignItems: "center",
        padding: "20px 40px",
      }}
    >
      <thead>
        <tr>
          <th colSpan={3} style={{ alignItems: "center" }}><p>trafix</p></th>
          <th>
            <Button>City</Button>
          </th>
          <th>
            <Button style={{ backgroundColor: "transparent" }}>Source</Button>
          </th>
        </tr>
      </thead>
      <tbody style={{ textUnderlineOffset: "21px" }}>
        <tr>
          <td colSpan={4}>Ice cream sandwich</td>
          <Td>237</Td>
        </tr>
        <tr>
          <td colSpan={4}>Ice cream sandwich</td>
          <Td>262</Td>
        </tr>
        <tr>
          <td colSpan={4}>Ice cream sandwich</td>
          <Td>305</Td>
        </tr>
        <tr>
          <td colSpan={5}>
            <Button>See all countries</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicTable;
