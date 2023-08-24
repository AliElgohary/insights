import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    margin: 30px;
    padding: 0;
    font-family: Karla;
    background-color: #f4f4f4;
}
button {
    font-family: Karla;
    border-radius: 5px;
    font-weight: 700;
    line-height: normal;
    &:hover {
        background-color: #e2e3e8;
    }
}`;

export default GlobalStyles;
