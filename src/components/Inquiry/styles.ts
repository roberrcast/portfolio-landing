import styled from "styled-components";
import { color, font, spacing } from "../../theme";

export const InquirySection = styled.section`
    padding: 128px ${spacing("mobileMargin")};
    background-color: ${color("background")};

    @media (min-width: 768px) {
        padding: 160px ${spacing("desktopMargin")};
    }
`;

export const FormContainer = styled.div`
    max-width: 700px;
    margin: 0 auto;
    border: 1px solid ${color("outlineVariant")};
    padding: 64px 24px;
    position: relative;

    @media (min-width: 768px) {
        padding: 80px 64px;
    }
`;

export const FloatingIcon = styled.div`
    position: absolute;
    top: -32px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${color("background")};
    padding: 0 24px;

    span {
        font-size: 48px;
        color: ${color("primary")};
    }
`;

export const Title = styled.h2`
    font-family: ${font("headline")};
    font-size: 32px;
    text-align: center;
    margin-bottom: 16px;
    color: ${color("onSurface")};
`;

export const Description = styled.p`
    font-family: ${font("body")};
    font-size: 16px;
    text-align: center;
    color: ${color("onSurfaceVariant")};
    margin-bottom: 64px;
    opacity: 0.8;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Label = styled.label`
    font-family: ${font("body")};
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${color("onSurfaceVariant")};
    transition: color 0.3s ease;

    ${FormGroup}:focus-within & {
        color: ${color("primary")};
    }
`;

export const Input = styled.input`
    background: transparent;
    border: none;
    border-bottom: 1px solid ${color("outlineVariant")};
    padding: 12px 0;
    color: ${color("onSurface")};
    font-family: ${font("body")};
    font-size: 16px;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-bottom-color: ${color("primary")};
    }

    &::placeholder {
        color: ${color("onSurfaceVariant")};
        opacity: 0.3;
    }
`;

export const Select = styled.select`
    background: transparent;
    border: none;
    border-bottom: 1px solid ${color("outlineVariant")};
    padding: 12px 0;
    color: ${color("onSurface")};
    font-family: ${font("body")};
    font-size: 16px;
    cursor: pointer;

    &:focus {
        outline: none;
        border-bottom-color: ${color("primary")};
    }

    option {
        background-color: ${color("surfaceContainerLow")};
        color: ${color("onSurface")};
    }
`;

export const SubmitButton = styled.button`
    margin-top: 24px;
    background-color: ${color("primary")};
    color: ${color("onPrimary")};
    padding: 24px;
    font-size: 12px;
    font-weigth: 700;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;

    &:hover {
        tranform: scale(1.02);
    }

    span {
        font-size: 18px;
    }
`;
