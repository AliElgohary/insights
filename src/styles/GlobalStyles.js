import { createGlobalStyle } from "styled-components";
import "@fontsource/karla"; 
import "@fontsource/karla/400.css"; 
import "@fontsource/karla/400-italic.css";

const GlobalStyles = createGlobalStyle`
body {
    background-color: #F9FAFB;
    font-family: Karla;
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
