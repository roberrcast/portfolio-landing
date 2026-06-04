import styled, { keyframes } from "styled-components";
import { color, font, spacing } from "../../theme";
import { fluid } from "../../mixins";

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-10px);}
    60% {transform: translateY(-5px);}
`;

export const HeroContainer = styled.section`
    position: relative;
    min-height: 100dvh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 80px ${spacing("mobileMargin")};

    @media (orientation: landscape) and (max-height: 600px) {
        padding-top: 180px;
        padding-bottom: 60px;
        justify-content: flex-start;
    }
`;

export const BackgroundImage = styled.div<{ $src: string }>`
    position: absolute;
    inset: 0;
    background-image: url(${(props) => props.$src});
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
    z-index: -2;
`;

export const GradientOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        ${color("background", "66")} 0%,
        transparent 50%,
        ${color("background")} 100%
    );
    z-index: -1;
`;

export const Content = styled.div`
    max-width: 900px;
    z-index: 10;
`;

export const Title = styled.h1`
    font-family: ${font("headline")};
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 24px;
    color: ${color("onBackground")};

    @media (min-width: 768px) {
        font-size: 88px;
    }

    @media (max-height: 500px) and (orientation: landscape) {
        font-size: 32px;
        margin-bottom: 12px;
    }
`;

export const Description = styled.p`
    font-family: ${font("body")};
    font-size: 18px;
    font-weight: 600;
    color: ${color("onSurfaceVariant")};
    max-width: 600px;
    margin: 0 auto 48px;
    opacity: 0.9;
    line-height: 1.6;
`;

export const CTAButton = styled.button`
    background-color: ${color("primary")};
    color: ${color("onPrimary")};
    padding: 20px 40px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    transition: all 0.3s ease;

    &:hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const ScrollIndicator = styled.div`
    position: absolute;
    bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    opacity: 0.4;
    animation: ${bounce} 2s infinite;

    @media (max-height: 500px) {
        display: none;
    }
`;

export const ScrollText = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    writing-mode: vertical-rl;
`;

export const ScrollLine = styled.div`
    width: 1px;
    height: 48px;
    background-color: ${color("onSurface")};
`;
