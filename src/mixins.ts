import { css } from "styled-components";

export const blur = (value: number | string) => css`
    backdrop-filter: blur(${value}px);
    -webkit-backdrop-filter: blur(${value}px);
`;
