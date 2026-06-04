import styled from "styled-components";
import { color, font, spacing } from "../../theme";

export const CraftSection = styled.section`
    padding: 80px ${spacing("mobileMargin")};
    background-color: ${color("surfaceContainerLowest")};
    position: relative;
    overflow: hidden;

    @media (min-width: 768px) {
        padding: 128px ${spacing("desktopMargin")};
    }
`;

export const Container = styled.div`
    max-width: ${spacing("containerMax")};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 80px;
    }
`;

export const TextContent = styled.div`
    max-width: 500px;
    width: 100%;
`;

export const Label = styled.span`
    display: block;
    font-family: ${font("body")};
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: ${color("primary")};
    margin-bottom: 24px;
`;

export const Title = styled.h2`
    font-family: ${font("headline")};
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 32px;
    color: ${color("onSurface")};

    @media (min-width: 768px) {
        font-size: 56px;
    }
`;

export const BodyText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: ${color("onSurfaceVariant")};
    max-width: 480px;

    p {
        font-family: ${font("body")};
        font-size: 16px;
        line-height: 1.6;
        opacity: 0.9;
    }

    strong {
        color: ${color("onSurface")};
        font-weight: 700;
    }
`;

export const FeatureList = styled.ul`
    margin-top: 48px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const FeaturedItem = styled.li`
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: ${font("body")};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: ${color("onSurface")};

    &::before {
        content: "";
        width: 32px;
        height: 1px;
        background-color: ${color("primary")};
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 450px;
`;

export const Frame = styled.div`
    position: relative;
    width: 100%;
    max-width: 450px;
    aspect-ratio: 3/4;
    padding: 16px;
    border: 1px solid ${color("outline", "4d")};
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Badge = styled.div`
    position: absolute;
    top: -16px;
    right: -16px;
    background-color: ${color("primary")};
    color: ${color("onPrimary")};
    padding: 16px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: -0.05em;
    line-height: 1;
    z-index: 5;
`;
