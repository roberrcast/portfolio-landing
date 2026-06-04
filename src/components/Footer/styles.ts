import styled from "styled-components";
import { color, font, spacing } from "../../theme";

export const FooterContainer = styled.footer`
    padding: 80px ${spacing("mobileMargin")};
    background-color: ${color("surfaceContainerLow")};
    border-top: 1px solid ${color("outlineVariant")};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 48px;

    @media (min-width: 768px) {
        padding: 128px ${spacing("desktopMargin")};
    }
`;

export const Brand = styled.h2`
    font-family: ${font("headline")};
    font-size: 32px;
    color: ${color("onSurface")};
`;

export const FooterNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;

    @media (min-width: 768px) {
        gap: 64px;
    }
`;

export const FooterLink = styled.a`
    font-family: ${font("body")};
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${color("onSurfaceVariant")};
    opacity: 0.7;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
        color: ${color("primary")};
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 16px;
`;

export const SocialIcon = styled.a`
    color: ${color("onSurfaceVariant")};
    opacity: 0.5;
    transition: all 0.3s ease;

    &:hover {
        color: ${color("primary")};
        opacity: 1;
        transform: translateY(-4px);
    }

    span {
        font-size: 24px;
    }
`;

export const Copyright = styled.p`
    font-family: ${font("body")};
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${color("onSurfaceVariant")};
    opacity: 0.4;
    margin-top: 32px;
`;
