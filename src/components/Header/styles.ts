import styled from "styled-components";
import { color, spacing, font } from "../../theme";
import { blur } from "../../mixins";

export const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${spacing("mobileMargin")};
    background-color: ${color("background")}CC;
    ${blur(12)};
    border-bottom: 1px solid ${color("outlineVariant")};
    z-index: 1000;

    @media (min-width: 768px) {
        padding: ${spacing("desktopMargin")};
    }
`;

export const LogoSection = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const TitleGroup = styled.hgroup``;

export const LogoText = styled.h1`
    font-family: ${font("headline")};
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: ${color("onBackground")};
`;

export const Subtitle = styled.p`
    font-size: 17px;
    font-weight: 600;
    color: ${color("primary")}CC;
    text-transform: uppercase;
    letter-spacing: 0.2em;
`;

export const NavLinks = styled.nav`
    display: none;
    gap: 32px;
    align-items: center;

    a {
        font-weight: 800;
    }
    @media (min-width: 768px) {
        display: flex;
    }
`;

export const NavLink = styled.a`
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: ${color("onSurfaceVariant")};
    transition: color 0.3s ease;

    &:hover {
        color: ${color("primary")};
    }

    &.active {
        color: ${color("primary")};
    }
`;

export const Icon = styled.span.attrs({
    className: "material-symbols-outlined",
})`
    color: ${color("primary")};
    cursor: pointer;
    user-select: none;
`;
