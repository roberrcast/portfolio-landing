import styled from "styled-components";
import { color, font, spacing } from "../../theme";

export const PhilosophyContainer = styled.section`
    position: relative;
    padding: 128px ${spacing("mobileMargin")};
    background-color: ${color("background")};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        padding: 128px ${spacing("desktopMargin")};
    }
`;

export const StaveLine = styled.div`
    display: none;
    position: absolute;
    left: ${spacing("desktopMargin")};
    top: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(
        to bottom,
        transparent,
        ${color("outline")} 50%,
        transparent
    );
    opacity: 0.2;

    @media (min-width: 768px) {
        display: block;
    }
`;

export const QuoteContent = styled.div`
    max-width: ${spacing("containerMax")};
    width: 100%;
    text-align: center;
`;

export const QuoteText = styled.p`
    font-family: ${font("headline")};
    font-size: 32px;
    font-style: italic;
    line-height: 1.4;
    color: ${color("onSurface")};
    max-width: 900px;
    margin: 0 auto;

    @media (min-width: 768px) {
        font-size: 48px;
    }
`;

export const Divider = styled.div`
    width: 96px;
    height: 1px;
    background-color: ${color("outline")};
    margin: 64px auto 0;
    opacity: 0.3;
`;
