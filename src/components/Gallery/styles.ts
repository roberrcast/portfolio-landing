import styled from "styled-components";
import { color, font, spacing } from "../../theme";

export const GallerySection = styled.section`
    padding: 80px ${spacing("mobileMargin")};
    background-color: ${color("surfaceContainerLow")};

    @media (min-width: 768px) {
        padding: 128px ${spacing("desktopMargin")};
    }
`;

export const Grid = styled.div`
    max-width: ${spacing("containerMax")};
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(12, 1fr);
        gap: 32px;
    }
`;

export const GridItem = styled.div<{ $columns: number; $aspectRatio: string }>`
    position: relative;
    overflow: hidden;
    border: 1px solid ${color("outlineVariant")};

    @media (min-width: 768px) {
        grid-column: span ${({ $columns }) => $columns};
        aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    }

    &:hover img {
        transform: scale(1.1);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease-out;
`;

export const ContentOverlay = styled.div`
    position: absolute;
    inset: 0;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
`;

export const ItemCategory = styled.span`
    font-family: ${font("body")};
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${color("primary")};
    margin-bottom: 8px;
`;

export const ItemTitle = styled.h3`
    font-family: ${font("headline")};
    font-size: 24px;
    color: ${color("onSurface")};
`;
