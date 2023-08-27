import styled from "styled-components";
import CustomStyledTable from "./TableTemplate";
import RightTable from "./RightTable";
import Countrytable from "./CountriesTable";

const AllTables = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-items: center;
`;
const TableContent = [
  {
    header: "Signup location",
    button1: "Source",
    button2: "City",
    button3: "See all Countries",
  },
  {
    header: "Behaviour",
    button1: "Browsers",
    button2: "Decides",
    button3: "See all Countries",
  },
];

function Table() {
  return (
    <AllTables>
      <CustomStyledTable />
      <RightTable />
      <Countrytable {...TableContent[0]} />
      <Countrytable {...TableContent[1]} />
    </AllTables>
  );
}

export default Table;
