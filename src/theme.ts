export const theme = {
    colors: {
        primary: "#f2ca50",
        onPrimary: "#3c2f00",
        background: "#131313",
        onBackground: "#e5e2e1",
        surface: "#131313",
        surfaceContainerLow: "#1c1b1b",
        surfaceContainerLowest: "#0e0e0e",
        onSurface: "#e5e2e1",
        onSurfaceVariant: "#d0c5af",
        outline: "#99907c",
        outlineVariant: "rgba(77, 70, 53, 0.2)",
    },
    fonts: {
        headline: "'Bodoni Moda', serif",
        body: "'Montserrat', sans-serif",
    },
    spacing: {
        mobileMargin: "20px",
        desktopMargin: "64px",
        containerMax: "1500px",
    },
};

export type ThemeType = typeof theme;

/* -- Funciones auxiliares para evitar escribir ${({ theme }) => theme.colors.primary} etc. todo el tiempo -- */

// Para colores
export const color =
    (key: keyof ThemeType["colors"], alpha: string = "") =>
    ({ theme }: { theme: ThemeType }) =>
        `${theme.colors[key]}${alpha}`;

// Para espaciados
export const spacing =
    (key: keyof ThemeType["spacing"]) =>
    ({ theme }: { theme: ThemeType }) =>
        theme.spacing[key];

// Parra las fuentes
export const font =
    (key: keyof ThemeType["fonts"]) =>
    ({ theme }: { theme: ThemeType }) =>
        theme.fonts[key];
