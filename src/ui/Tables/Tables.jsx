import styled from "styled-components";
import CustomStyledTable from "./TableTemplate";


const AllTables = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    justify-items: center;
`;

function Table(){
    return (
        <AllTables>
        <CustomStyledTable />
        <CustomStyledTable />
        <CustomStyledTable />
        <CustomStyledTable />
        </AllTables>
    )
}


export default Table