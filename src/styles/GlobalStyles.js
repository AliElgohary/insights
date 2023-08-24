import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    background-color: #F9FAFB;
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
