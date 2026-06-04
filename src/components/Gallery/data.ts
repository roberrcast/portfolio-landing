import { westminster, face, market, statue } from "../../assets";

export interface Gallery {
    id: number;
    img: string;
    cat: string;
    title: string;
    cols: number;
    ratio: string;
}

export const galleryData: Gallery[] = [
    {
        id: 1,
        img: westminster,
        cat: "Palacio de Westminster, Londres",
        title: "Gótico Perpendicular",
        cols: 7,
        ratio: "4/5",
    },
    {
        id: 2,
        img: face,
        cat: "Estatua en el Louvre, París",
        title: "Fisonomía de la Sabiduría",
        cols: 5,
        ratio: "4/6",
    },
    {
        id: 3,
        img: market,
        cat: "Mercado San Miguel, Madrid",
        title: "Mercado Viejo",
        cols: 5,
        ratio: "16/9",
    },
    {
        id: 4,
        img: statue,
        cat: "Estatua en el V&A, Londres",
        title: "Postura Elegante",
        cols: 7,
        ratio: "16/9",
    },
];
