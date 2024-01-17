import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }   

    body {
        background-color: #121214;
    }

    *::-webkit-scrollbar {
        background: #17171a;
        width: 0.3rem;
    }

    *::-webkit-scrollbar-thumb {
        background: #E07B67;
        border-radius: 0.5rem;
    }
`;

export default GlobalStyle;