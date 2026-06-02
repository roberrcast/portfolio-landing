import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}
   
body {
   background-color: ${(props) => props.theme.colors.background};
   color: ${(props) => props.theme.colors.onBackground};
   font-family: ${(props) => props.theme.fonts.body};
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   overflow-x: hidden;
   scroll-behavior: smooth;
}
   
h1, h2, h3 {
    font-family: ${(props) => props.theme.fonts.headline};
}
   
a {
   text-decoration: none;
   color: inherit;
}
   
button {
   cursor: pointer;
   border: none;
   background: none;
   font-family: inherit;
}
`;
