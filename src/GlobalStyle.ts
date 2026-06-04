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
   
h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.headline};
    font-size: unset;
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

.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

.material-symbols-outlined {
   font-family: 'Material Symbols Outlined' !important;
   font-weight: normal;
   font-style: normal;
   line-height: 1;
   letter-spacing: normal;
   text-transform: none;
   display: inline-block;
   white-space: nowrap;
   word-wrap: normal;
   direction: ltr;
   -webkit-font-smoothing: antialiased;
   
   font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
`;
