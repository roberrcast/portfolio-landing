import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}

html {
    font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
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

hr {
    height: 0;
    color: inherit;
}

abbr[title] {
    text-decoration: underline-dotted;
}

b, strong {
    font-weight: bolder;
}

code, kbd, samp, pre {
    font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 1em;
}

small {
    font-size: 80$;
}
   
sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

table {
    text-indent: 0;
    border-color: inherit;
}

button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}

button, select {
    text-transform: none;
}

button, [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance: button;
}

::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

:-moz-focusring {
    outline: 1px dotted ButtonText;
}

:-moz-ui-invalid {
    box-shadow: none;
}

legend {
    padding: 0;
}

progress {
    vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
    height: auto;
}

[type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}

summary {
    display: list-item;
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
